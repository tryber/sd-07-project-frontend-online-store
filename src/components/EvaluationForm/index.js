import React, { Component } from 'react';
import ReactStars from 'react-stars';
import './EvaluationForm.css';
import * as lsapi from '../../services/lsapi';

class EvaluationForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
      rating: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.ratingChanged = this.ratingChanged.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  ratingChanged(newRating) {
    this.setState({ rating: newRating });
  }

  handleClick() {
    const evaluation = this.state;
    const { productId } = this.props;
    lsapi.addEvaluation(productId, evaluation);
  }

  render() {
    return (
      <div className="form-container">
        <h2>Avaliações</h2>
        <div className="form-content">
          <input type="text" name="email" onChange={ this.handleChange } />
          <ReactStars
            value={ this.state.rating }
            count={ 5 }
            onChange={ this.ratingChanged }
            size={ 24 }
            color2={ '#ffd700' } 
          />
          <textarea 
            name="message"
            onChange={ this.handleChange }
            data-testid="product-detail-evaluation"
          />
          <button type="button" onClick={ this.handleClick } >Avaliar</button>
        </div>
      </div>
    );
  }
}

export default EvaluationForm;
