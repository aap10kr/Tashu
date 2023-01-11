import React from 'react';

function Table (props){

    const onChange = (event) => {
      props.selectValues(event.target.value);
    };
    
  return(
    <>
      <section className='w-full pb-20'>
        <section className='flex justify-center w-full my-4'>
          <select className='w-1/2 py-4 text-xl' onClick={onChange} onChange={onChange}>
            <option value="2015" className='text-xl'>2015</option>
            <option value="2016" className='text-xl'>2016</option>
            <option value="2017" className='text-xl'>2017</option>
            <option value="2018" className='text-xl'>2018</option>
            <option value="2019" className='text-xl'>2019</option>
            <option value="2020" className='text-xl'>2020</option>
            <option value="2021" className='text-xl'>2021</option>
            <option value="2022" className='text-xl'>2022</option>
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
              {props.list.map((it) =>(
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
      </section>
    </>
  )
}

export default Table;