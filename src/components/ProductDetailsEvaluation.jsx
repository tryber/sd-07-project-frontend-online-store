import React from 'react';
import Assessment from './Assessment';

class ProductDetailsEvaluation extends React.Component {
  constructor() {
    super();

    this.handleEvaluationChange = this.handleEvaluationChange.bind(this);
    this.saveEvaluation = this.saveEvaluation.bind(this);

    this.state = {
      email: '',
      note: 0,
      message: '',
      assessments: [],
    };
  }

  saveEvaluation() {
    const { email, note, message, assessments } = this.state;
    const comment = { email, note, message };
    this.setState({
      email: '',
      note: 0,
      message: '',
      assessments: assessments.concat([comment]),
    });
  }

  handleEvaluationChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, note, message, assessments } = this.state;
    return (
      <div>
        <h3>Avaliações</h3>
        <div>
          <div>
            <input
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleEvaluationChange }
              placeholder="Email"
            />
            <input
              type="number"
              name="note"
              value={ note }
              onChange={ this.handleEvaluationChange }
              min={ 0 }
              max={ 5 }
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Mensagem (opcional)"
              value={ message }
              onChange={ this.handleEvaluationChange }
              data-testid="product-detail-evaluation"
            />
          </div>
          <button type="button" onClick={ this.saveEvaluation }>
            Avaliar
          </button>
        </div>
        <div>
          {
            assessments.map((item) => (<Assessment key={ item.email } props={ item } />))
          }
        </div>
      </div>
    );
  }
}

export default ProductDetailsEvaluation;
