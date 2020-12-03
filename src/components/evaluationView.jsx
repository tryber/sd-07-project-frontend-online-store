import React from 'react';
import Rating from '@material-ui/lab/Rating';

class EvaluationView extends React.Component {
  constructor() {
    super();

    this.state = {
      evaluations: [],
    };

    this.loadEvaluation = this.loadEvaluation.bind(this);
    this.renderEvaluation = this.renderEvaluation.bind(this);
  }

  componentDidMount() {
    this.loadEvaluation();
  }

  loadEvaluation() {
    const evaluation = JSON.parse(localStorage.getItem('evaluation'));
    this.setState(evaluation);
  }

  renderEvaluation() {
    const { evaluations } = this.state;
    return (
      <div>
        <div>
          {evaluations.map((evaluation) => (
            <div key={ evaluation.email }>
              <div name="email" value={ evaluation.email }>
                { evaluation.email }
              </div>
              <div>
                <Rating
                  name="rating"
                  value={ evaluation.rating }
                  max={ 5 }
                  precision={ 0.5 }
                  readOnly
                />
              </div>
              <div name="comment" value={ evaluation.comment }>
                { evaluation.comment }
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  render() {
    const { evaluations } = this.state;
    return (
      <div>
        <h4>Avaliações de outros clientes:</h4>
        <div>
          {evaluations.length ? (
            this.renderEvaluation()
          ) : (
            <p>Não existem outras avaliações</p>
          )}
        </div>
      </div>
    );
  }
}

export default EvaluationView;
