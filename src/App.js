import React from 'react';
import './App.css';
import * as api from './services/api';
import Main from './page/Main';

class App extends React.Component {
  render() {
   /*  api.getCategories.then(teste => console.log(teste));
    api.getProductsFromCategoryAndQuery('MLB5672', 'Acessórios para Veículos')
      .then(product => console.log(product.results[0])) */
    return (
      <div>
        <Main />
      </div>      
    );
  }
}

export default App;
