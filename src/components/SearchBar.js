import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
    render() {
        <div>
            <label>
                <button>Botão de pesquisa</button>
                <input type="text"></input>
            </label>
            <Link to="/shoppingCart"><button>Carrinho de compras</button></Link>
        </div>
    }
}

export default SearchBar;