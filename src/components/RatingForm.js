import React from 'react';

class RatingForm extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      textRate: '',
    };
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
          onChange={ (event) => this.updateMovie('email', event.target.value) }
        />
      </div>
    );
  }

  renderTextRateInput() {
    const { textRate } = this.state;
    return (
      <div>
        <input
          placeholder="Mensagem (opcional)"
          type="text"
          value={ textRate }
          onChange={ (event) => this.updateMovie('textRate', event.target.value) }
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form>
          { this.renderEmailInput() }
          { this.renderTextRateInput()}
        </form>

      </div>
    );
  }
}

export default RatingForm;
