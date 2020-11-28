import React from 'react';

class RatingForm extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: 1,
      email: '',
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({ [name]: target.value });
  }

  render() {
    const { rating, email, message } = this.state;
    return (
      <div>
        <form>
          Anavliações
          <label htmlFor="email">
            Email:
            <input
              name="email"
              type="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="email">
            Avaliação (1 a 5):
            <input
              name="rating"
              type="number"
              value={ rating }
              onChange={ this.handleChange }
              min="1"
              max="5"
            />
          </label>
          <label htmlFor="email">
            Mensagem: (Opcional)
            <textarea
              name="message"
              data-testid="product-detail-evaluation"
              value={ message }
              onChange={ this.handleChange }
            />
          </label>
          <button type="button">Avaliar</button>
        </form>
      </div>
    );
  }
}

export default RatingForm;
