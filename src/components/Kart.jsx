import React from 'react';
import './InitialScreen.css';
import KartItens from './KartItens';
import * as storageServices from '../services/storageServices';

class KartList extends React.Component {
  constructor() {
    super();

    this.getStorageItens = this.getStorageItens.bind(this);

    this.state = {
      message: 'Seu carrinho está vazio',
      itensStorage: [],
    };
  }

  componentDidMount() {
    this.getStorageItens();
  }

  async getStorageItens() {
    const itensStorage = await storageServices.getProductsStorage();
    this.setState({ itensStorage });
  }

  render() {
    let { itensStorage } = this.state;
    const { message } = this.state;
    if (!itensStorage) itensStorage = storageServices.getProductsStorage();
    return (
      <div className="kart">
        {itensStorage ? (
          <KartItens
            itensStorage={ itensStorage }
            getStorageItens={ this.getStorageItens }
          />
        ) : (
          <h1 data-testid="shopping-cart-empty-message">{message}</h1>
        )}
      </div>
    );
  }
}

export default KartList;
