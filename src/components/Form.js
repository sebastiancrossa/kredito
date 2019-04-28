import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  render() {
    return (
      <form action='' className='form-form'>
        <p className='form-title'>Eres una persona...</p>
        <div className='form-button-group'>
          <button className='form-button-group-fisica form-button-group-button'>
            FISICA
          </button>

          <button className='form-button-group-moral form-button-group-button'>
            MORAL
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
