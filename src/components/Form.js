import React, { Component } from 'react';
import './Form.css';

import { Link } from 'react-router-dom';

class Form extends Component {
  render() {
    return (
      <form action='' className='form-form'>
        <p className='form-title'>Eres una persona...</p>
        <div className='form-button-group'>
          <Link
            to='/persona/fisica/form'
            className='form-button-group-fisica form-button-group-button'
          >
            FISICA
          </Link>

          <Link className='form-button-group-moral form-button-group-button'>
            MORAL
          </Link>
        </div>
      </form>
    );
  }
}

export default Form;
