import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <header>
                <input type="text" id="shopping-cart-search" />
                <Link data-testid="shopping-cart-button" to={'/pages/shopping-cart'}>Carrinho</Link>
            </header>
        )}
}

export default Header;
