import React from 'react';
import PropTypes from 'prop-types';

class ButtonCart extends React.Component {
  constructor(props) {
    super(props);
    this.addCart = this.addCart.bind(this);
  }

  totalQuantity(array) {
    let total = null;
    array.forEach(({ quantity }) => { total += quantity; });
    sessionStorage.setItem('totalQuantity', total);
  }

  findSimilar(array, value) {
    let isRepeated = false;

    array.forEach((item) => {
      if (item.title === value) {
        isRepeated = true;
        item.quantity += 1;
      }
    });

    if (isRepeated) this.finalPost(array);
    return isRepeated;
  }

  addCart({ target: { value } }) {
    const { upQty } = this.props;
    const items = JSON.parse(sessionStorage.getItem('item'));
    if (items) {
      if (!this.findSimilar(items, value)) {
        const products = [...items, { title: value, quantity: 1 }];
        this.finalPost(products);
      }
    } else {
      const product = [{ title: value, quantity: 1 }];
      this.finalPost(product);
    }
    upQty();
  }

  finalPost(array) {
    this.totalQuantity(array);
    sessionStorage.setItem('item', JSON.stringify(array));
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
  upQty: PropTypes.func.isRequired,
};
