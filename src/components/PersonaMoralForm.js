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
        <input type='text' id='personamoralform-ingresos' />

        <label for='personaformalform-prestamo'>Pedido de prestamo:</label>
        <input type='text' id='personamoralform-prestamo' />

        <button type='submit'>SUBMIT</button>
      </form>
    );
  }
}

export default PersonaFisicaForm;
