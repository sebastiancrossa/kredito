import React, { Component } from 'react';
import './PersonaFisica.css';

import PersonaFisicaForm from '../components/PersonaFisicaForm';

class PersonaFisica extends Component {
  render() {
    return (
      <div className='personafisica'>
        <h2 className='personafisica-header'>Persona Fisica</h2>

        <div className='personafisica-form'>
          <PersonaFisicaForm />
        </div>
      </div>
    );
  }
}

export default PersonaFisica;
