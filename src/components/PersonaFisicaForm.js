import React, { Component } from 'react';
import axios from 'axios';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './PersonaFisicaForm.css';

const style = {
  width: 400,
  margin: 10
};

const marks = {
  6: '6',
  12: '12',
  18: '18',
  24: '24',
  30: '30',
  36: '36',
  42: '42',
  48: '48',
  54: '54',
  60: '60'
};

class PersonaFisicaForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      legalName: '',
      dateFounded: '',
      rfc: '',
      monthlyEarnings: '',
      loan: '',
      termInMonths: '6'
    };

    this.onChangeLegalName = this.onChangeLegalName.bind(this);
  }

  onChangeLegalName = e => {
    this.setState({
      legalName: e.target.value
    });
  };

  onChangeDate = e => {
    this.setState({
      dateFounded: e.target.value
    });
  };

  onChangeRFC = e => {
    this.setState({
      rfc: e.target.value
    });
  };

  onChangeMonthlyEarnings = e => {
    this.setState({
      monthlyEarnings: e.target.value
    });
  };

  onChangeLoan = e => {
    this.setState({
      loan: e.target.value
    });
  };

  onSliderChange = sliderValues => {
    this.setState({
      termInMonths: sliderValues
    });
  };

  handleSubmit = e => {
    //alert(this.state.termInMonths);
    e.preventDefault();

    axios
      .post(
        'https://m31l0bxiyi.execute-api.us-east-2.amazonaws.com/default/InputMoral',
        {
          legalName: this.state.legalName,
          dateFounded: this.state.dateFounded,
          rfc: this.state.rfc,
          monthlyEarnings: this.state.monthlyEarnings,
          loan: this.state.loan,
          termInMonths: this.state.termInMonths
        }
      )
      .then(res => {
        console.log(res.data);
      });
  };

  render() {
    return (
      <form className='personafisicaform' onSubmit={this.handleSubmit}>
        <label for='personafisicaform-name'>Nombre legal:</label>
        <input
          type='text'
          id='personafisicaform-name'
          onChange={this.onChangeLegalName}
        />

        <label for='personafisicaform-date'>Fecha de constitución:</label>
        <input
          type='date'
          id='personafisicaform-date'
          onChange={this.onChangeDate}
        />

        <label for='personafisicaform-ingresos'>RFC</label>
        <input
          type='text'
          id='personafisicaform-rfc'
          onChange={this.onChangeRFC}
        />

        <label for='personafisicaform-ingresos'>Ingresos mensuales:</label>
        <div className='personafisica-ingresos-input'>
          <p className='personafisica-signo'>$</p>
          <input
            type='number'
            id='personafisica-ingresos'
            onChange={this.onChangeMonthlyEarnings}
          />
        </div>

        <label for='personafisicaform-prestamo'>Cantidad deseada:</label>
        <div className='personafisica-ingresos-input'>
          <p className='personafisica-signo'>$</p>
          <input
            type='number'
            id='personafisica-prestamo'
            onChange={this.onChangeLoan}
          />
        </div>

        <p className='personamoralform-slider-label'>
          Quiero pagarlo en ___ meses
        </p>
        <Slider
          className='personamoralform-slider'
          min={6}
          max={60}
          step={6}
          style={style}
          marks={marks}
          onChange={this.onSliderChange}
        />

        <button type='submit'>SUBMIT</button>
      </form>
    );
  }
}

export default PersonaFisicaForm;
