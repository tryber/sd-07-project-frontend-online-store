import React from 'react';

class RatingForm extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: '',
      textRate: '',
    };
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateInput(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderEmailInput() {
    const { email } = this.state;
    return (
      <div>
        <input
          placeholder="Email."
          type="text"
          value={ email }
          onChange={ (event) => this.updateInput('email', event.target.value) }
        />
      </div>
    );
  }

  renderTextRateInput() {
    const { textRate } = this.state;
    return (
      <div>
        <textarea
          data-testid="product-detail-evaluation"
          placeholder="Mensagem (opcional)"
          value={ textRate }
          rows={ 5 }
          cols={ 50 }
          maxLength={ 250 }
          onChange={ (event) => this.updateInput('textRate', event.target.value) }
        />
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div>
        <button
          type="button"
          onClick={ this.handleSubmit }
        >
          Submit
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form>
          { this.renderEmailInput() }
          { this.renderTextRateInput()}
          { this.renderSubmitButton() }
        </form>

      </div>
    );
  }
}

export default RatingForm;
