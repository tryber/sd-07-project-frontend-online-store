import React, { Component } from 'react';

export default class Rating extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      nameValue: '',
      rating: 0,
    };
  }

  handleChangeName(event) {
    this.setState({ nameValue: event.target.value });
    // console.log(this.state.value)
  }

  handleChangeMsg(event) {
    this.setState({ value: event.target.value });
    // console.log(this.state.value)
  }

  handleChangeRating(event) {
    this.setState({ rating: event.target.value });
    // console.log(this.state.value)
  }

  handleSubmit(event) {
    const { nameValue } = this.state;
    alert(`${nameValue} , sua mensagem foi enviada!`);
    event.preventDefault();
  }

  render() {
    const { value, nameValue, rating } = this.state;
    return (
      <div className="container-rating">
        <div>
          <h3>Avaliações</h3>
          <form onSubmit={ this.handleSubmit.bind(this) }>
            <label htmlFor="product-detail-evaluation-text-name">
              Nome:
              <input
                id="product-detail-evaluation-text-name"
                //   data-testid="product-detail-evaluation"
                type="text"
                value={ nameValue }
                onChange={ this.handleChangeName.bind(this) }
              />
            </label>
            <label htmlFor="product-detail-evaluation-text-msg">
              Mensagem:
              <textarea
                id="product-detail-evaluation-text-msg"
                data-testid="product-detail-evaluation"
                placeholder="Mensagem Opcional"
                type="text"
                value={ value }
                onChange={ this.handleChangeMsg.bind(this) }
              />
            </label>
            <label htmlFor="product-detail-evaluation-rating">
              Nota:
              <input
                id="product-detail-evaluation-rating"
                placeholder="Mensagem Opcional"
                type="Number"
                maxLength={ 5 }
                minLength={ 1 }
                value={ rating }
                onChange={ this.handleChangeRating.bind(this) }
              />
            </label>
            <input type="submit" value="Avaliar" />
          </form>
        </div>
      </div>
    );
  }
}
