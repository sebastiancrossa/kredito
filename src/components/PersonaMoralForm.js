import React, { Component } from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import './PersonaMoralForm.css';

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
      <form className='personamoralform'>
        <label for='personamoralform-name'>Nombre Completo:</label>
        <input type='text' id='personamoralform-name' />

        <label for='personamoralform-date'>Fecha de naciemiento:</label>
        <input type='date' id='personafisicaform-date' />

        <label for='personamoralform-ingresos'>Ingresos mensuales:</label>
        <div className='personamoral-ingresos-input'>
          <p className='personamoralform-signo'>$</p>
          <input type='number' id='personamoralform-ingresos' />
        </div>

        <label for='personamoral-prestamo'>Pedido de prestamo:</label>
        <div className='personamoral-ingresos-input'>
          <p className='personamoralform-signo'>$</p>
          <input type='number' id='personamoralform-prestamo' />
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
