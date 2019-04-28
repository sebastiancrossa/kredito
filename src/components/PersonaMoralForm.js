import React, { Component } from 'react';
import axios from 'axios';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

// Component imports

import './PersonaMoralForm.css';
import Modal from 'react-modal';

import b1 from '../imgs/1.jpg';
import b2 from '../imgs/2.png';
import b3 from '../imgs/3.png';
import b4 from '../imgs/4.png';
import b5 from '../imgs/5.jpg';
import b6 from '../imgs/6.png';

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

const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '600px',
    height: '350px',
    marginRight: '-50%',
    padding: '30px',
    transform: 'translate(-50%, -50%)'
  }
};

class PersonaMoralForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      middleName: '',
      lastName: '',
      rfc: '',
      birthDate: '',
      monthlyEarnings: '',
      loan: '',
      termInMonths: '6',
      modalIsOpen: false
    };

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  onChangeFirstName = e => {
    var splitName = e.target.value.split(' ');
    this.setState({
      firstName: splitName[0],
      middleName: splitName[1],
      lastName: splitName[2]
    });
  };

  onChangeDate = e => {
    this.setState({
      birthDate: e.target.value
    });
  };

  onChangeMonthlyEarnings = e => {
    this.setState({
      monthlyEarnings: e.target.value
    });

    axios
      .get(
        `https://jfhe88-rfc-generator-mexico.p.rapidapi.com/rest1/rfc/get?solo_homoclave=0&apellido_materno=${
          this.state.lastName
        }&apellido_paterno=${this.state.middleName}&fecha=${
          this.state.birthDate
        }&nombre=${this.state.firstName}`,
        {
          headers: {
            'X-RapidAPI-Host': 'jfhe88-rfc-generator-mexico.p.rapidapi.com',
            'X-RapidAPI-Key':
              '2261be5678msh93907ccc22442efp17a85fjsnbf6dbfff8699'
          }
        }
      )
      .then(res => {
        var rfcJson = res.data;
        this.setState({
          rfc: rfcJson.response.data.rfc
        });

        console.log(rfcJson.response.data.rfc);
      });
  };

  onChangeLoan = e => {
    this.setState({
      loan: e.target.value
    });
  };

  onChangeTermInMonths = e => {
    this.setState({
      termInMonths: String(e.target.value)
    });
  };

  onSliderChange = sliderValues => {
    this.setState({
      termInMonths: sliderValues
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    axios
      .post(
        'https://m31l0bxiyi.execute-api.us-east-2.amazonaws.com/default/Hola',
        {
          firstName: this.state.firstName,
          middleName: this.state.middleName,
          lastName: this.state.lastName,
          rfc: this.state.rfc,
          birthDate: this.state.rfc,
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
      <form className='personamoralform' onSubmit={this.handleSubmit}>
        <label htmlFor='personamoralform-name'>Nombre Completo:</label>
        <input
          type='text'
          id='personamoralform-name'
          onChange={this.onChangeFirstName}
        />

        <div className='personamoral-rfc-container'>
          <label for='personamoralform-rfc'>RFC:</label>
          <input
            type='text'
            id='personamoralform-rfc'
            value={this.state.rfc}
            disabled
          />
        </div>

        <label for='personamoralform-date'>Fecha de naciemiento:</label>
        <input
          type='date'
          id='personafisicaform-date'
          onChange={this.onChangeDate}
        />

        <label for='personamoralform-ingresos'>Ingresos mensuales:</label>
        <div className='personamoral-ingresos-input'>
          <p className='personamoralform-signo'>$</p>
          <input
            type='number'
            id='personamoralform-ingresos'
            onChange={this.onChangeMonthlyEarnings}
          />
        </div>

        <label for='personamoral-prestamo'>Pedido de prestamo:</label>
        <div className='personamoral-ingresos-input'>
          <p className='personamoralform-signo'>$</p>
          <input
            type='number'
            id='personamoralform-prestamo'
            onChange={this.onChangeLoan}
          />
        </div>

        <p className='personamoralform-slider-label'>
          Quiero pagarlo en ___ meses.
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

        <button
          type='submit'
          onClick={
            this.state.firstName != '' &&
            this.state.middleName != '' &&
            this.state.lasttName != '' &&
            this.state.rfc != '' &&
            this.state.birthDate != '' &&
            this.state.monthlyEarnings != '' &&
            this.state.loan != ''
              ? this.openModal
              : null
          }
        >
          NEXT
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customModalStyles}
          contentLabel='Lista de bancos...'
        >
          <button className='modal-button' onClick={this.closeModal}>
            x
          </button>
          <h2 className='modal-title'>Elija su banco actual...</h2>

          <div className='modal-grid'>
            <a href=''>
              <img src={b1} alt='' className='modal-grid-img' />
            </a>
            <a href=''>
              <img src={b2} alt='' className='modal-grid-img' />
            </a>
            <a href=''>
              <img src={b3} alt='' className='modal-grid-img' />
            </a>
            <a href=''>
              <img src={b4} alt='' className='modal-grid-img' />
            </a>
            <a href=''>
              <img src={b5} alt='' className='modal-grid-img' />
            </a>
            <a href=''>
              <img src={b6} alt='' className='modal-grid-img' />
            </a>
          </div>
        </Modal>
      </form>
    );
  }
}

export default PersonaMoralForm;
