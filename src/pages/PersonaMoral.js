import React, { Component } from 'react';
import './PersonaMoral.css';

import { Link } from 'react-router-dom';

import PersonaMoralForm from '../components/PersonaMoralForm';
import PersonaFisicaForm from '../components/PersonaFisicaForm';

import arrow from '../imgs/left-arrow.svg';

import ScrollReveal from '../util/ScrollReveal';

class PersonaMoral extends Component {
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
    return (
      <div className='personamoral' ref='box1'>
        <div className='personamoral-info'>
          <Link className='personamoral-info-back' to='/'>
            <img
              src={arrow}
              className='personamoral-info-back-arrow'
              alt='Back arrow'
            />
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
