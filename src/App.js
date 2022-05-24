import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './components/Header'
import Homepage from './pages/Homepage';
import Coinpage from './pages/Coinpage';

function App() {

  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage/>} exact/>
          <Route path='/coins/:id' element={<Coinpage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
