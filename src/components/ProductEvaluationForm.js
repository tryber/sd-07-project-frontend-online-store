import React, { Component } from 'react';

export default class ProductEvaluationForm extends Component {
  render() {
    return (
      <div>
        <h1>Avaliações</h1>
        <form>
          <input type="email" placeholder="Digite seu email" />
          <textarea
            data-testid="product-detail-evaluation"
            placeholder="Mensagem (Opcional)"
          />
          <button type="button">Avaliar</button>
        </form>
      </div>
    );
  }
}
