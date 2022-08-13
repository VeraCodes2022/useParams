import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Detail from './Detail';


function App() {
  const data=[
    {title:'HTML', content:'HTML Course 20 Hours'},
    {title:'CSS', content:'CSS Course 22 Hours'},
    {title:'JavaScript', content:'JavaScript Course 200 Hours'},
    {title:'React', content:'React Course 200 Hours'},
    {title:'Vue', content:'Vue Course 200 Hours'},
    {title:'Angular', content:'Angular Course 200 Hours'}
  ]
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact="true" element={<Home data={data}/>}></Route>
        <Route path='/detail/:title'  element={<Detail data={data}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
