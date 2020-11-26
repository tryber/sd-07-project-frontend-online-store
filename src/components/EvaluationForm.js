import React from 'react';

class EvaluationForm extends React.Component {
  render() {
    return (
      <div>
        <h2>Avaliações</h2>
        <input type="email" placeholder="Email" required/>
        <textarea placeholder="Mensagem (opcional)"/>
        <button type="button">AVALIAR</button>
      </div>
    )
  }
}

export default EvaluationForm;