import React from 'react';
import Rating from '@material-ui/lab/Rating';

class EvaluationForm extends React.Component {
  constructor() {
    super();

    this.state = {
      // evaluations: [],
      email: '',
      rating: 0,
      comment: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }


  render() {
    const { email, rating, comment } = this.state;
    return (
      <div>
        <form>
          <input
            type="email"
            name="email"
            value={ email }
            placeholder="Digite seu email"
            onChange={ this.handleChange }
            required
          />
          <div>
            <Rating
              name="rating"
              value={ rating }
              max={ 5 }
              precision={ 0.5 }
              onClick={ this.handleChange }
            />
          </div>
          <textarea
            data-testid="product-detail-evaluation"
            name="comment"
            value={ comment }
            placeholder="Faça um comentário sobre o produto"
            cols="60"
            rows="4"
            onChange={ this.handleChange }
          />
          <button
            type="submit"
            onClick={ this.saveEvaluation }
          >
            Avaliar
          </button>
        </form>
      </div>
    );
  }
}

export default EvaluationForm;
