import React from 'react';
import './App.css';

// Component imports
import Form from './components/Form';
import blob1 from './imgs/blob1.svg';
import blob2 from './imgs/blob2.svg';
import logo from './imgs/kredito_logo@3x.png';

function App() {
  return (
    <div className='App'>
      <img src={blob1} className='blob1' alt='' />
      <img src={blob2} className='blob2' alt='' />
      <div className='app-main'>
        <div className='app-title'>
          <img src={logo} className='app-title-header' alt='Kredito logo' />
          <p className='app-title-desc'>
            La forma más rápida de pedir un prestamo
          </p>
        </div>

        <div className='app-form'>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
