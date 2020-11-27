import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RatingForm extends Component {
  constructor() {
    super();
    this.saveReview = this.saveReview.bind(this);
    this.state = {
      email: '',
      rating: '',
      comment: '',
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  saveReview() {
    const { addComment } = this.props;
    addComment(this.state);
    this.setState({ email: '', rating: '', comment: '' });
  }

  render() {
    const { email, rating, comment } = this.state;
    return (
      <div>
        <form>
          <input
            type="email"
            name="email"
            placeholder="seu_email@provedor.com"
            onChange={ (event) => this.handleChange(event) }
            value={ email }
          />
          <input
            type="number"
            name="rating"
            min={ 0 }
            max={ 5 }
            onChange={ (event) => this.handleChange(event) }
            value={ rating }
          />
          <textarea
            name="comment"
            data-testid="product-detail-evaluation"
            placeholder="Mensagem(opcional)"
            onChange={ (event) => this.handleChange(event) }
            value={ comment }
          />
          <button
            type="button"
            onClick={ () => this.saveReview() }
          >
            Avaliar
          </button>
        </form>
      </div>
    );
  }
}

RatingForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default RatingForm;
