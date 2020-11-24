import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link data-testid="shopping-cart-button" to="/cartBuy">
          <img className="cartBuy"
            src="https://img.icons8.com/ios/452/shopping-cart.png"
           alt="imagem de carrinho" 
					/>
				</Link>
          </div>
    );
  }
}

export default Search;
