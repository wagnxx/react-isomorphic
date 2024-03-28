import React, { useCallback, useEffect, useState } from 'react';
import {  Route, Routes, Link , Outlet, Switch, useRoutes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';

function App() {

    useEffect(()=> {
    //   window.a =   useRoutes()
    }, [])

    
  return (
    <div>
      <h1>Hello, Isomorphic React!！！3</h1>


      <nav>
          {/* 导航链接 */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
             
          </ul>
        </nav>
      
      
      {/* <BrowserRouter> */}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    {/* </BrowserRouter> */}

    </div>
  );
}

export default App;
