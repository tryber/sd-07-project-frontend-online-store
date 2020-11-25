import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Cards extends React.Component {
  render() {
    const { products } = this.props;
    console.log(products);
    return (
      <div>
        {products.map((product) => product && (
          <Card key={ product.id } productCards={ product } />
        ))}
      </div>
    );
  }
}

Cards.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cards;
