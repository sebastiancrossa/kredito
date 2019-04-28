import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './PersonaFisicaForm.css';

const style = {
  width: 400,
  margin: 10
};

const marks = {
  6: '6',
  12: '12',
  18: '18',
  24: '24',
  30: '30',
  36: '36',
  42: '42',
  48: '48',
  54: '54',
  60: '60'
};

class PersonaFisicaForm extends Component {
  render() {
    return (
      <form className='personafisicaform'>
        <label for='personafisicaform-name'>Nombre Completo:</label>
        <input type='text' id='personafisicaform-name' />

        <label for='personafisicaform-date'>Fecha de nacimiento:</label>
        <input type='date' id='personafisicaform-date' />

        <label for='personafisicaform-ingresos'>Ingresos mensuales:</label>
        <div className='personafisica-ingresos-input'>
          <p className='personafisica-signo'>$</p>
          <input type='number' id='personafisica-ingresos' />
        </div>

        <label for='personafisicaform-prestamo'>Pedido de prestamo:</label>
        <div className='personafisica-ingresos-input'>
          <p className='personafisica-signo'>$</p>
          <input type='number' id='personafisica-prestamo' />
        </div>

        <p className='personamoralform-slider-label'>Quiero pagarlo en...</p>
        <Slider
          className='personamoralform-slider'
          min={6}
          max={60}
          step={6}
          style={style}
          marks={marks}
        />

        <button type='submit'>SUBMIT</button>
      </form>
    );
  }
}

export default PersonaFisicaForm;
