import React from 'react';

class Header extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
        <header>
            <input type="text" id="shopping-cart-search"/>
            <button data-testid="shopping-cart-button">Pesquisar</button>
        </header>
        )}
}

export default Header;