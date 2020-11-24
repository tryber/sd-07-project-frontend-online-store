import React, {Component} from 'react';
import Header from '../components/Header'

export default class Products extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="busca">
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
      </div>
    );
  }
}
