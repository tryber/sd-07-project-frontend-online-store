import React from 'react';

class FormRating extends React.Component {
  constructor() {
    super();
    this.changeHandler = this.changeHandler.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.state = {
      email: '',
      userMessage: '',
      evaluationRate: 1,
    };
  }

  changeHandler({ target }) {
    const { name } = target;
    this.setState({ [name]: target.value });
  }

  renderForm({ changeHandler, userMessage, email, rating }) {
    return (
      <form className="evaluation-form" id="form-evaluation">
        <input
          className="input-evaluation email-evaluation"
          name="email"
          onChange={ changeHandler }
          value={ email }
          type="email"
          placeholder="Email"
        />
        <label className="labels" htmlFor="rating">
          Nota do Produto:
          <input
            className="input-evaluation rating-evaluation"
            id="rating"
            onChange={ changeHandler }
            name="evaluationRating"
            type="number"
            value={ rating }
            min="1"
            max="5"
          />
        </label>
        <textarea
          className="textarea-evaluation"
          data-testid="product-detail-evaluation"
          name="userMessage"
          value={ userMessage }
          placeholder="Mensagem(Opcional)"
          onChange={ changeHandler }
        />
        <button className="evaluation-button" type="button">Avaliar</button>
      </form>
    );
  }

  render() {
    const { userMessage, email, evaluationRate } = this.state;
    return (
      <div className="form-evaluation-container">
        <h1>Avaliações</h1>
        {this.renderForm(this.changeHandler, userMessage, email, evaluationRate)}
      </div>
    );
  }
}

export default FormRating;
