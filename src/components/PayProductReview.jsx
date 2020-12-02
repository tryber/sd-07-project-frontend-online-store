import React from 'react';

class PayProductReview extends React.Component {
  render() {
    const { kartProducts } = this.props;
    const zero = 0;
    const totalValue = kartProducts.map((product) => product.price)
      .reduce((accumulator, currentValue) => accumulator + currentValue, zero);
    const productKart = kartProducts.map((product) => (
      <div key={ product.id }>
        <img src={ product.thumbnail } alt="Imagem do produto" />
        <div>{product.title}</div>
        <div>{product.price}</div>
      </div>
    ));
    return (
      <div>
        <h2>Revise seus Produtos</h2>
        { productKart }
        <h4>{`Total: R$ ${totalValue}`}</h4>
      </div>
    );
  }
}

PayProductReview.propTypes = [].isRequired;

export default PayProductReview;
