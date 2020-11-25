import React from 'react';
import { Link } from 'react-router-dom';

class ShoppinCart extends React.Component {
    render() {
        return (
            <div>
                <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
            </div>
            
        );
    }
}

export default ShoppinCart;