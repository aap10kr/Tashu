import React from 'react';
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <nav>
        <ul>
          <li className='py-[27px] bg-white'>
            <Link to="/"><img src='../../img/img.jpg' alt='homeLogo'/></Link>
          </li>
          <li className='py-4 px-4 mt-14 mb-2 hover:bg-white hover:text-blue-600 text-2xl font-bold rounded-l-2xl text-white'>
            <Link to="/sugu">서구</Link>
          </li>
          <li className='py-4 px-4 my-2 hover:bg-white hover:text-blue-600 text-2xl font-bold rounded-l-2xl text-white'>
            <Link to="/yusunggu">유성구</Link>
          </li>
          <li className='py-4 px-4 my-2 hover:bg-white hover:text-blue-600 text-2xl font-bold rounded-l-2xl text-white'>
            <Link to="/deadukgu">대덕구</Link>
          </li>
          <li className='py-4 px-4 my-2 hover:bg-white hover:text-blue-600 text-2xl font-bold rounded-l-2xl text-white'>
            <Link to="/junggu">중구</Link>
          </li>
          <li className='py-4 px-4 my-2 hover:bg-white hover:text-blue-600 text-2xl font-bold rounded-l-2xl text-white'>
            <Link to="/donggu">동구</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;