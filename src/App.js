import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <input type="text" data-testid="home-initial-message" />
        <h2>Digite algum termo de pesquisa ou escolha uma categoria.</h2>
        <button data-testid="shopping-cart-button">Carrinho de compras</button>
      </header>
    </div>
  );
}

export default App;
