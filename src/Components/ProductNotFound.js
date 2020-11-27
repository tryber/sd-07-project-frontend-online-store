import React from 'react';

class ProductNotFound extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Nenhum produto foi encontrado
        </p>
      </div>
    );
  }
}

export default ProductNotFound;
