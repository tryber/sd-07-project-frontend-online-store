import React from 'react';
import PropTypes from 'prop-types';
import ListCardsProduts from './ListCardsProduts';
import '../Pages/Home.css';


class CardsRenderList extends React.Component {
  render() {
    const { products, termo } = this.props;
    return (
      <div className="center">
        {products.map((product) => (
          <ListCardsProduts key={ product.id } product={ product } termo={ termo } />
        ))}
      </div>
    );
  }
}

CardsRenderList.propTypes = {
  products: PropTypes.objectOf.isRequired,
  termo: PropTypes.string.isRequired,
};

export default CardsRenderList;
