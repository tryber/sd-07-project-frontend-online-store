import React from 'react';
import PropTypes from 'prop-types';

class BotAdd extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <input
        type="button"
        onClick={ onClick }
        data-testid="product-detail-add-to-cart"
        value="Adicionar ao Carrinho"
      />
    );
  }
}

BotAdd.propTypes = { onClick: PropTypes.func.isRequired };

export default BotAdd;
