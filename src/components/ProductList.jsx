import React from 'react';

class ProductList extends React.Component {
  render() {
    return (
      <form>
        <label data-testid='home-initial-message'>
          <input  type='text'/><br />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
      </form>
    );
  }
}

export default ProductList;
