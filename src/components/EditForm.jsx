import React from 'react';
import PropTypes from 'prop-types';
import ResultForm from './ResultForm'

export default class EditForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      radio: '',
      comentario: '',
    };
    this.enviar = this.enviar.bind(this);
    this.atualizaEstado = this.atualizaEstado.bind(this);
    this.restaura = this.restaura.bind(this);

  }


  restaura() {
    const review = JSON.parse(localStorage.getItem('review'));
    this.setState(review);
  }


  atualizaEstado(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
//  const array = JSON.parse(localStorage.getItem('items') || '[]');

  enviar(event) {
    event.preventDefault() // para nao recarregar a pagina
    localStorage.setItem('review', JSON.stringify(this.state))
    // quando envio guardo o estado todo 
    this.setState({
        email:'',
        radio:'',
        comentario:''
    }) // zera tudo
  }

  render() {
    return (
        <div>
      <form>
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.atualizaEstado}
        />

        <input
          type="number"
          name="radio"
          value={this.state.radio}
          onChange={this.atualizaEstado}
        />
        <textarea
          data-testid="product-detail-evaluation"
          name="comentario"
          value={this.state.comentario}
          onChange={this.atualizaEstado}
        />
        <button type="button" onClick={(event) => this.enviar(event)}>
          texto aqui
        </button>
      </form>

      < ResultForm />
      </div>
    );
  }
}
