import React from 'react';
import { Route, BrowserRouter, Routes} from "react-router-dom";
import Home from './component/Home'
import Sugu from './component/Sugu'
import Navbar from './component/Navbar'
import Yusunggu from './component/Yusunggu'
import Junggu from './component/Junggu'
import Donggu from './component/Donggu';
import Deadukgu from './component/Deadukgu';

function App() {
  return (
      <BrowserRouter>
        <div className='flex w-full h-[647px] bg-blue-600'>
          <section className='w-1/12'>
            <Navbar/>
          </section>
          <section className='w-11/12'>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/sugu' element={<Sugu />}/>
              <Route path='/yusunggu' element={<Yusunggu />}/>
              <Route path='/deadukgu' element={<Deadukgu />}/>
              <Route path='/junggu' element={<Junggu />}/>
              <Route path='/donggu' element={<Donggu />}/>
            </Routes>
          </section>
        </div>
      </BrowserRouter>
  );
}

export default App;