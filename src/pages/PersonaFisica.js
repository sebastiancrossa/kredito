import React, { Component } from 'react';
import './PersonaFisica.css';

import { Link } from 'react-router-dom';

import PersonaFisicaForm from '../components/PersonaFisicaForm';

class PersonaFisica extends Component {
  render() {
    return (
      <div className='personafisica'>
        <div className='personafisica-info'>
          <Link className='personafisica-info-back' to='/'>
            Back
          </Link>
          <h1 className='personafisica-info-header'>Persona Fisica</h1>
        </div>

        <div className='personafisica-form'>
          <PersonaFisicaForm />
        </div>
      </div>
    );
  }
}

export default PersonaFisica;
