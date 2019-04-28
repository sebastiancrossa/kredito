import React, { Component } from 'react';

import './PersonaFisicaForm.css';

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

        <button type='submit'>SUBMIT</button>
      </form>
    );
  }
}

export default PersonaFisicaForm;
