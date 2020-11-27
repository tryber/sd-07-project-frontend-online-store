import React from 'react';

class ListCardsProduts extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="">
        <div>
          <div>
            <p>{product.title}</p>
            <img src={ product.thumbnail } alt={ `${product.title} sprite` } />
            <p>{product.price}</p>
            <button
              onClick={ this.handleClick }
              type="button"
            >
              ADICIONAR NO CARRINHO
            </button>
          </div>

        </div>
      </div>
    );
  }
}

export default ListCardsProduts;
