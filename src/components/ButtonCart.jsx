import React from 'react';
class ButtonCart extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }
  addToCart({ target }) {
    sessionStorage.setItem('item', target.value);
  }
  render() {
    const { title, test } = this.props;
    return(
      <button data-testid={test} value={title} onClick={this.addToCart}>Adicionar ao carrinho</button>
    );
  }
}
export default ButtonCart;