import React, { Component } from 'react';
import * as lsapi from '../../services/lsapi';
import './EvaluationList.css';

class EvaluationList extends Component {
  render() {
    const { productId } = this.props;
    // const ratedProduct = lsapi.getEvaluationList(productId);
    const ratedProduct = [
      {
        email: 'fernando@gmail',
        evaluation: 3,
        mesage: 'muito bom'
      },
      {
        email: 'talita@hotmail',
        evaluation: 4,
        mesage: 'gostei'
      },
      {
        email: 'davi@gmail',
        evaluation: 5,
        mesage: 'com certeza vou pedir mais'
      },
    ];
    return (
      <div className="formlist-container">
        { ratedProduct.map((rated) => 
        <div>
          <p>email: { rated.email }</p>
          <p>Nota: {rated.evaluation}</p>
          <p>Mensagem: {rated.mesage}</p>
          <hr />
        </div>
        ) }
      </div>
    );
  }
}

export default EvaluationList;
