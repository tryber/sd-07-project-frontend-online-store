import React from 'react';
import ReactStars from 'react-stars';
import PropTypes from 'prop-types';

class RatingForm extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.ratingChanged = this.ratingChanged.bind(this);

    this.state = {
      email: '',
      textRate: '',
      rating: 0,
    };
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateInput(field, newValue) {
    this.setState({ [field]: newValue });
  }

  ratingChanged(newRating) {
    this.setState({ rating: newRating });
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
    const { rating } = this.state;
    return (
      <div>
        <form>
          { this.renderEmailInput() }
          <ReactStars
            count={ 5 }
            onChange={ this.ratingChanged }
            size={ 24 }
            color2="#ffd700"
            half={ false }
            value={ rating }
          />
          { this.renderTextRateInput()}
          { this.renderSubmitButton() }
        </form>

      </div>
    );
  }
}

RatingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RatingForm;
