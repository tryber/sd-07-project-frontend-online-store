import React from 'react';
import KartItens from './KartItens';
import Header from './Header';
import * as storageServices from '../services/storageServices';

class KartList extends React.Component {
  constructor() {
    super();

    this.getStorageItens = this.getStorageItens.bind(this);
    this.getKartItens = this.getKartItens.bind(this);

    this.state = {
      message: 'Seu carrinho está vazio',
      itensStorage: [],
      qttItemsKart: storageServices.getStorageKartItens(),
    };
  }

  componentDidMount() {
    this.getStorageItens();
  }

  async getStorageItens() {
    const itensStorage = await storageServices.getProductsStorage();
    this.setState({ itensStorage });
  }

  getKartItens() {
    const qttItemsKart = storageServices.getStorageKartItens();
    this.setState({ qttItemsKart });
  }


  render() {
    let { itensStorage } = this.state;
    const { message, qttItemsKart } = this.state;
    if (!itensStorage) {
      itensStorage = storageServices.getProductsStorage();
    }

    return (
      <div className="kart">
        <Header qttItemsKart={ qttItemsKart } />
        {itensStorage ? (
          <KartItens
            itensStorage={ itensStorage }
            getStorageItens={ this.getStorageItens }
            getKartItens={ this.getKartItens }
          />
        ) : (
          <h1 data-testid="shopping-cart-empty-message">{message}</h1>
        )}
      </div>
    );
  }
}

export default KartList;
