import React from 'react';
import CardProduct from './Card';

class ListCards extends React.Component {
  render() {
    const { products } = this.props;
    const {} = products;

    return (
      <div data-testid="movie-list" className="movie-list">
        {products.map((product) => <CardProduct key={product.title} image={product.image} price={product.price} />)}
      </div>
    );
  }
}

//ListCards.propTypes = { products: PropTypes.ArrayOf(PropTypes.object).isRequired }

export default ListCards;
