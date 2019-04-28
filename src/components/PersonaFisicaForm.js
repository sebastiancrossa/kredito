import React, { Component } from 'react';

import './PersonaFisicaForm.css';

class PersonaFisicaForm extends Component {
  render() {
    return (
      <form className='personafisicaform'>
        <label for='personafisicaform-name'>Nombre Completo:</label>
        <input type='text' id='personafisicaform-name' />

        <label for='personafisicaform-date'>Correo:</label>
        <input type='date' id='personafisicaform-date' />

        <label for='personafisicaform-ingresos'>Ingresos mensuales:</label>
        <input type='text' id='personafisicaform-ingresos' />

        <label for='personafisicaform-prestamo'>Pedido de prestamo:</label>
        <input type='text' id='personafisicaform-prestamo' />

        <button type='submit'>SUBMIT</button>
      </form>
    );
  }
}

export default PersonaFisicaForm;
