import React from 'react';
import PropTypes from 'prop-types';

export default class ResultForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      radio: '',
      comentario: '',
    };
    this.restauraEstado = this.restauraEstado.bind(this);
  }

  restauraEstado() {
    const review = JSON.parse(localStorage.getItem('review'));
    this.setState(review);
  }

  componentDidMount() {
    this.restauraEstado();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="email"
          value={ this.state.email }
          readOnly
        />

        <input
          type="number"
          name="radio"
          value={ this.state.radio }
          readOnly
        />
        <textarea
          name="comentario"
          value={ this.state.comentario }
          readOnly
        />
      </div>
    );
  }
}
