import React from 'react';
import Rating from '@material-ui/lab/Rating';
import EvaluationView from './evaluationView';

class EvaluationForm extends React.Component {
  constructor() {
    super();

    this.state = {
      evaluations: [],
      email: '',
      rating: 0,
      comment: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.saveEvaluation = this.saveEvaluation.bind(this);
    this.loadEvaluation = this.loadEvaluation.bind(this);
  }

  componentDidMount() {
    this.loadEvaluation();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  saveEvaluation() {
    const { evaluations } = this.state;
    const evaluationsState = this.state;
    const storeEvaluation = evaluations.concat(evaluationsState);
    this.setState({ evaluations: storeEvaluation });
    localStorage.setItem('evaluation', JSON.stringify(this.state));
    this.setState({
      email: '',
      rating: 0,
      comment: '',
    });
  }

  loadEvaluation() {
    const evaluation = JSON.parse(localStorage.getItem('evaluation'));
    this.setState(evaluation);
  }

  render() {
    const { email, rating, comment } = this.state;
    return (
      <div>
        <h4>Avalie este produto:</h4>
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
            type="button"
            onClick={ this.saveEvaluation }
          >
            Avaliar
          </button>
        </form>
        <EvaluationView />
      </div>
    );
  }
}

export default EvaluationForm;
