import React, { Component } from 'react';
import remove from './img/remove.png';


class Cart extends Component {

    render () {
        return (
            <div>
                <h1>Carrinho teste</h1>
                <img src={remove} alt="Remover item"/>

            </div>
        );
    }
}

export default Cart;