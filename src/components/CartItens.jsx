import React from 'react';

class CartItens extends React.Component {

    render() {
        const { item } = this.props;
        const { title, price } = item;
        return (
            <div>
                <p data-testid="shopping-cart-product-name" >{title}</p>
                <p>{price}</p>
                <p data-testid="shopping-cart-product-quantity">1</p>
            </div>
        )
    }
}

export default CartItens;
