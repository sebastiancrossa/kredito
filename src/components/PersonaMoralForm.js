import React, { Component } from 'react';

import './PersonaMoralForm.css';

class PersonaFisicaForm extends Component {
  render() {
    return (
      <form className='personamoralform'>
        <label for='personamoralform-name'>Nombre Completo:</label>
        <input type='text' id='personamoralform-name' />

        <label for='personamoralform-date'>Correo:</label>
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

        <button type='submit'>SUBMIT</button>
      </form>
    );
  }
}

export default PersonaFisicaForm;
