/* eslint-disable react-hooks/exhaustive-deps */
/*global kakao*/ 
import React, { useEffect, useState } from 'react'

const Donggu=()=>{

  const API_KEY = process.env.REACT_APP_API_KEY 
  const [ list, setList ] = useState([]);
  const [selectValue, setSelectValue] = useState("2015");
  
  const onChange = (event) => {
    const value = event.target.value;
    setSelectValue(value);
    getData()
  };

  async function getData(){
    const url = `http://apis.data.go.kr/B552061/frequentzoneBicycle/getRestFrequentzoneBicycle?ServiceKey=${API_KEY}&searchYearCd=${selectValue}&siDo=30&guGun=110&type=json&numOfRows=20&pageNo=1`
    const response = await fetch(url);
    const data = await response.json();

    const locations = data.items.item.map((spot) => [
      spot.spot_nm, 
      spot.la_crd, 
      spot.lo_crd, 
      spot.occrrnc_cnt, 
      spot.caslt_cnt, 
      spot.dth_dnv_cnt, 
      spot.se_dnv_cnt, 
      spot.sl_dnv_cnt, 
      spot.wnd_dnv_cnt
    ]);
    list.push(data);
    setList(locations);
    drawMap(locations);
  }
  

  function drawMap(locations){
    var container = document.getElementById('map');
    
    var options = {
      center: new kakao.maps.LatLng(locations[0][1], locations[0][2]),
      level: 7
    };

    var map = new kakao.maps.Map(container, options);

    for(let i=0; i<locations.length; i++){

    var marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(locations[i][1], locations[i][2]),
      map: map, 
    });

    marker.setMap(map);

    var infowindow = new kakao.maps.InfoWindow({
      content: locations[i][0] // 인포윈도우에 표시할 내용
    });

    // 마커에 마우스오버 이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
  
    }
  }

    function makeOverListener(map, marker, infowindow) {
      return function() {
          infowindow.open(map, marker);
      };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
    function makeOutListener(infowindow) {
      return function() {
          infowindow.close();
      };
    }
    
    useEffect(()=>{
      getData()
    }, [])

    return (
      <div className='h-full bg-white'>
      <section className=''>
      <div className='flex justify-end py-8 px-6 bg-white'>
        <h1 className='text-2xl font-bold text-blue-600'>{selectValue}&ensp;대전광역시 중구 자전거 사고다발 지역</h1>
      </div>
      <div id="map" className='w-full h-[550px]'></div>
      </section>
      <section className='flex justify-center w-full my-4'>
      <select className='w-1/2 py-4 text-xl' onChange={onChange}>
        <option value="2015" className='text-xl'>2015</option>
        <option value="2016" className='text-xl'>2016</option>
        <option value="2017" className='text-xl'>2017</option>
        <option value="2018" className='text-xl'>2018</option>
        <option value="2019" className='text-xl'>2019</option>
        <option value="2020" className='text-xl'>2020</option>
        <option value="2021" className='text-xl'>2021</option>
      </select>
      </section>
      <section className='flex justify-center w-full pb-20'>
        <table>
          <thead>
            <tr className='bg-blue-600'>
              <th className='px-4 py-4 text-white'>사고 발생지</th>
              <th className='px-4 text-white'>발생건수</th>
              <th className='px-4 text-white'>사상자수</th>
              <th className='px-4 text-white'>사망자수</th>
              <th className='px-4 text-white'>중상자수</th>
              <th className='px-4 text-white'>경상자수</th>
              <th className='px-4 text-white'>부상신고자수</th>
            </tr>
          </thead>
          <tbody>
            {list.map((it) =>(
              <tr className='border-b'>
                <td className='py-2 '>{it[0]}</td>
                <td className='py-2 text-center'>{it[3]}</td>
                <td className='py-2 text-center'>{it[4]}</td>
                <td className='py-2 text-center'>{it[5]}</td>
                <td className='py-2 text-center'>{it[6]}</td>
                <td className='py-2 text-center'>{it[7]}</td>
                <td className='py-2 text-center'>{it[8]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
    )
}

export default Donggu;