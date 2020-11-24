import React from 'react';

class ProductList extends React.Component {
  render() {
    return (
      <div>
        <input type="text" /> <br />
        <span
          data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
      </div>
    )
  }
}

export default ProductList;
