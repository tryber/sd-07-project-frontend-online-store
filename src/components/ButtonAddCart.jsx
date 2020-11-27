import React, { Component } from 'react';

class ButtonAddCart extends Component {
  constructor(props) {
    super(props);
    this.saveItem = this.saveItem.bind(this);
  }

  saveItem() {
    // const { product } = this.props;
    // const items = JSON.parse(localStorage.getItem('itemsCart') || '[]');
    // items.push(product);
    // product(product);
    // localStorage.setItem('itemsCart', JSON.stringify(items));
  }

  render() {
    return (
      <div>
        <button
          type="submit"
          name="button"
          onClick={ () => this.saveItem() }
        >
          Clique Aqui
        </button>
      </div>
    );
  }
}

export default ButtonAddCart;
