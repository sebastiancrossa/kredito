import React, { Component } from 'react';
import './PersonaFisica.css';

import { Link } from 'react-router-dom';

import PersonaFisicaForm from '../components/PersonaFisicaForm';
import PersonaMoralForm from '../components/PersonaMoralForm';

import arrow from '../imgs/left-arrow.svg';
import ScrollReveal from '../util/ScrollReveal';

class PersonaFisica extends Component {
  componentDidMount = () => {
    const config = {
      origin: 'bottom',
      duration: 1000,
      delay: 150,
      distance: '500px',
      scale: 0.8,
      easing: 'ease'
    };

    ScrollReveal.reveal(this.refs.box1, config);
  };
  render() {
    const completed = true;
    return (
      <div className='personafisica' ref='box1'>
        <div className='personafisica-info'>
          <Link className='personafisica-info-back' to='/'>
            <img
              src={arrow}
              className='personafisica-info-back-arrow'
              alt='Back arrow'
            />
          </Link>
          <h1 className='personafisica-info-header'>Persona Física</h1>
        </div>

        <div className='personafisica-form'>
          <PersonaMoralForm />
        </div>
      </div>
    );
  }
}

export default PersonaFisica;
