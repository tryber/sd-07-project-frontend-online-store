import React from 'react';

class FormRating extends React.Component {
  constructor() {
    super();
    this.changeHandler = this.changeHandler.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.state = {
      email: '',
      userMessage: '',
    };
  }

  changeHandler({ target }) {
    const { name } = target;
    this.setState({ [name]: target.value });
  }

  renderForm({ changeHandler, userMessage, email }) {
    return (
      <form id="form-evaluation">
        <input
          name="email"
          onChange={ changeHandler }
          value={ email }
          type="email"
          placeholder="Email"
        />
        <label htmlFor="rating">
          Nota do Produto:
          <input id="rating" type="number" value="1" min="1" max="5" />
        </label>
        <textarea
          data-testid="product-detail-evaluation"
          name="userMessage"
          value={ userMessage }
          placeholder="Mensagem(Opcional)"
          onChange={ changeHandler }
        />
        <button type="button">Avaliar</button>
      </form>
    );
  }

  render() {
    const { userMessage, email } = this.state;
    return (
      <div className="form-evaluation-container">
        <h1>Avaliações</h1>
        {this.renderForm(this.changeHandler, userMessage, email)}
      </div>
    );
  }
}

export default FormRating;
