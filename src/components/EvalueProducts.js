import React, { Component } from 'react';

class EvalueProducts extends Component {
  render() {
    return (
      <div>
        <div>Avalições do Produto</div>
        <input name="email" type="email" placeholder="Email" />
        <br />
        <br />
        <textarea
          data-testid="product-detail-evaluation"
          name="message"
          type="text"
          placeholder="Mensagem (Opcional)"
        />
        <br />
        <button type="button">Avaliar</button>
      </div>

    );
  }
}

export default EvalueProducts;
