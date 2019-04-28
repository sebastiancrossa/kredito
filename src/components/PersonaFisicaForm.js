import React, { Component } from 'react';

import './PersonaFisicaForm.css';

class PersonaFisicaForm extends Component {
  render() {
    return (
      <form action='' className='personafisicaform'>
        <label for='personafisicaform-name'>Nombre Completo:</label>
        <input type='text' id='personafisicaform-name' />

        <label for='personafisicaform-correo'>Correo:</label>
        <input type='email' id='personafisicaform-correo' />
      </form>
    );
  }
}

export default PersonaFisicaForm;
