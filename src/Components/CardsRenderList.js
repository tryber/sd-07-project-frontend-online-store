import React from 'react';
import Proptypes from 'prop-types';
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
  product: Proptypes.shape ({
    termo: Proptypes.string.isRequired,
  }),
};

export default CardsRenderList;
