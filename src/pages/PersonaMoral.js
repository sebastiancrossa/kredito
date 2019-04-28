import React, { Component } from 'react';
import './PersonaMoral.css';

import { Link } from 'react-router-dom';

import PersonaMoralForm from '../components/PersonaMoralForm';
import PersonaFisicaForm from '../components/PersonaFisicaForm';

class PersonaMoral extends Component {
  render() {
    return (
      <div className='personamoral'>
        <div className='personamoral-info'>
          <Link className='personamoral-info-back' to='/'>
            Back
          </Link>
          <h1 className='personamoral-info-header'>Persona Moral</h1>
        </div>

        <div className='personamoral-form'>
          <PersonaFisicaForm />
        </div>
      </div>
    );
  }
}

export default PersonaMoral;
