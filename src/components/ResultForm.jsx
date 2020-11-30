import React from 'react';

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

  componentDidMount() {
    this.restauraEstado();
  }

  restauraEstado() {
    const review = JSON.parse(localStorage.getItem('review'));
    this.setState(review);
  }

  render() {
    const { email, radio, comentario } = this.state;
    return (
      <div>
        <input
          type="text"
          name="email"
          value={ email }
          readOnly
        />

        <input
          type="number"
          name="radio"
          value={ radio }
          readOnly
        />
        <textarea
          name="comentario"
          value={ comentario }
          readOnly
        />
      </div>
    );
  }
}
