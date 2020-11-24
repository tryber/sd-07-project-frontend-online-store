import React from 'react';
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ShoppingCart from '../pages/shopping-cart'

class Header extends React.Component {
    constructor() {
        super();
        }
    

    render() {
        return (
        <BrowserRouter>
            <header>
                <input type="text" id="shopping-cart-search" />
                <Link data-testid="shopping-cart-button" to={'/pages/shopping-cart'}>Carrinho</Link>
            </header>
            <Switch>
                <Route exact path='/pages/shopping-cart' component={ShoppingCart} />
            </Switch>
        </BrowserRouter>
        )}
}

export default Header;
