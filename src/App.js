import React from 'react';
import './App.css';

// Component imports
import Form from './components/Form';

function App() {
  return (
    <div className='App'>
      <div className='app-main'>
        <div className='app-title'>
          <h2 className='app-title-header'>Kredito</h2>
          <p className='app-title-desc'>
            La forma mas rapida de pedir un prestamo
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
