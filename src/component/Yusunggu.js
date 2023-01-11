/* eslint-disable react-hooks/exhaustive-deps */
/*global kakao*/ 
import React, { useEffect, useState } from 'react'
import Table from './Table.js'

const Yusunggu=()=>{

  const API_KEY = process.env.REACT_APP_API_KEY
  const [ list, setList ] = useState([]);
  const [selectValue, setSelectValue] = useState("2015");
  
  const selectValues = (selectValues) => {
    setSelectValue(selectValues);
    getData()
  };

  async function getData(){
    const url = `http://apis.data.go.kr/B552061/frequentzoneBicycle/getRestFrequentzoneBicycle?ServiceKey=${API_KEY}&searchYearCd=${selectValue}&siDo=30&guGun=140&type=json&numOfRows=20&pageNo=1`
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
      level: 6
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
      <div className='flex justify-end py-8 px-6 bg-white'>
        <h1 className='text-2xl font-bold text-blue-600'>{selectValue}&ensp;대전광역시 중구 자전거 사고다발 지역</h1>
      </div>
      <div id="map" className='w-full h-[550px]'></div>
      <Table 
        list={list} 
        selectValues={selectValues}
      />
    </div>
  );
}

export default Yusunggu;