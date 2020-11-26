import React from 'react';
import PropTypes from 'prop-types';

class ButtonCart extends React.Component {
  constructor(props) {
    super(props);
    this.addCart = this.addCart.bind(this);
  }

  addCart({ target }) {
    sessionStorage.setItem('item', target.value);
  }

  render() {
    const { title, test } = this.props;
    return (
      <button type="button" data-testid={ test } value={ title } onClick={ this.addCart }>
        Adicionar ao carrinho
      </button>
    );
  }
}

export default ButtonCart;

ButtonCart.propTypes = {
  title: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
};
