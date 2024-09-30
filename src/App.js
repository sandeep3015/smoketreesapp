import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import SuccessPage from './SuccessPage';


const App = () => {
  return(
    <div className='main-container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegisterForm />}/>
          <Route path='/register' element={<SuccessPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
