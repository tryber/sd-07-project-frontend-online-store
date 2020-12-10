import React from 'react';

class UpdateQuantity extends React.Component {
  constructor() {
    super();

    this.state = {
      quantity: [],
    };

    this.updateQuantity = this.updateQuantity.bind(this);
  }

  updateQuantity(obj) {
    this.setState((estadoAnterior) => ({
      quantity: [...estadoAnterior.quantity, obj],
    }));
  }

  render() {
    const { id } = this.props;
    //const obj = { [id]: 1 };
    //this.updateQuantity(obj);
    return (
      <div>
        <p data-testid="shopping-cart-product-quantity">1</p>
        {/* { this.state.quantity.id } */}
      </div>
    );
  }
}

export default UpdateQuantity;
