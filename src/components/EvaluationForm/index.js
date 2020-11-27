import React, { Component } from 'react';
import './EvaluationForm.css';

class EvaluationForm extends Component {
  render() {
    return (
      <div className="form-container">
        <h2>Avaliações</h2>
        <div className="form-content">
          <input type="text" name="email" />
          <textarea name="message" />
          <button type="submit">Avaliar</button>
        </div>
      </div>
    );
  }
}

export default EvaluationForm;
