import React from 'react';
import Proptypes from 'prop-types';
import Produto from './Produto';

class ListaDeProdutos extends React.Component {
  render() {
    const { onFetchProducts } = this.props;
    return (
      <div>
        { onFetchProducts
          .map((product) => <Produto key={ product.id } product={ product } />) }
      </div>
    );
  }
}

export default ListaDeProdutos;

ListaDeProdutos.propTypes = {
  onFetchProducts: Proptypes.arrayOf(Proptypes.object),
}
