import React, { Component } from 'react';
import axios from 'axios';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Link } from 'react-router-dom';
import './PersonaFisicaForm.css';
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
    height: '450px',
    marginRight: '-50%',
    padding: '30px',
    transform: 'translate(-50%, -50%)'
  }
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
      termInMonths: '6',
      puntaje: '0'
    };

    this.onChangeLegalName = this.onChangeLegalName.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  openModal2() {
    this.setState({
      modal2IsOpen: true
    });
  }

  closeModal2() {
    this.setState({
      modal2IsOpen: false
    });
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
        this.setState({
          puntaje: JSON.parse(res.data).category
        });

        console.log(this.state.puntaje);
      });

    this.setState({
      modalIsOpen: false,
      modal2IsOpen: true
    });
  };

  renderResultElement() {
    if (this.state.puntaje == 'A') {
      return (
        <p className='resultado-loan'>
          100% de tu ${this.state.loan} de prestamo (${this.state.loan}) + $
          {this.state.loan * 0.1} del total ($
          {this.state.loan * 0.1 + this.state.loan}) + 25% de interes
        </p>
      );
    } else if (this.state.puntaje == 'B') {
      return (
        <p className='resultado-loan'>
          100% de tu ${this.state.loan} de prestamo (${this.state.loan}) + 29%
          de interes
        </p>
      );
    } else if (this.state.puntaje == 'C') {
      return (
        <p className='resultado-loan'>
          75% de tu ${this.state.loan} de prestamo ($
          {this.status.loan * 0.75 + this.status.loan}) + 35% de interes
        </p>
      );
    } else if (this.state.puntaje == 'D') {
      return <p className='resultado-loan'>No tenemos ningun plan para ti</p>;
    } else {
      return <p className='resultado-loan'>Espere</p>;
    }
  }

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
          refs='box1'
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

          <button className='modal-submit-button' onClick={this.handlePost}>
            SUBMIT
          </button>
        </Modal>

        <Modal
          isOpen={this.state.modal2IsOpen}
          onRequestClose={this.closeModal2}
          style={customModalStyles}
          contentLabel='Resultado...'
          refs='box1'
        >
          <h2 className='modal-title'>Te ofrecemos</h2>
          <div className='modal2-resultado'>{this.renderResultElement()}</div>
          <div className='modal-submit-links-grid'>
            <Link to='/' className='modal-submit-link'>
              Accept
            </Link>
            <Link to='/' className='modal-submit-link'>
              REINICIAR
            </Link>
          </div>
        </Modal>
      </form>
    );
  }
}

export default PersonaFisicaForm;
