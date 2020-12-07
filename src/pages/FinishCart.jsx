import React from 'react';
import '../App.css';
import TopBar from '../components/TopBar';

class FinishCart extends React.Component {
  constructor() {
    super();

    this.state = {
      listProduct: [],
      emptyCart: true,
    };
  }

  componentDidMount() {
    this.loadList();
  }

  loadList() {
    if (localStorage.length) {
      const products = JSON.parse(localStorage.getItem('cartItems'));
      this.setState({
        emptyCart: false,
        listProduct: [...products],
      });
    }
  }

  render() {
    const { listProduct, emptyCart } = this.state;
    const products = localStorage.getItem('cartItems');
    // console.log(products);

    if (products === '[]' || emptyCart) {
      return (
        <div className="page-container">
          <div className="page-sub-container">
            <TopBar />
            <h1
              data-testid="shopping-cart-empty-message"
              className="empty-cart"
            >
              Seu carrinho está vazio
            </h1>
          </div>
        </div>
      );
    }

    return (
      <div className="page-container">
        <div className="page-sub-container">
          <TopBar />
          <div className="items-card-container">
            {listProduct.map((item) => (
              <div className="product-card" key={ item.id }>
                <img src={ item.thumbnail } alt={ item.title } />
                <div>
                  <h3 data-testid="shopping-cart-product-name">{item.title}</h3>
                  <p>{`R$ ${item.price}`}</p>
                </div>
              </div>
            ))}
          </div>
          <span>Preço XXXX</span>
          <div>
            <h3>Informações do Comprador</h3>
            <input
              data-testid="checkout-fullname"
              placeholder="Nome completo"
              type="text"
              required
            />
            <input
              data-testid="checkout-email"
              placeholder="Email"
              type="text"
              required
            />
            <input
              data-testid="checkout-cpf"
              placeholder="CPF"
              type="text"
              required
            />
            <input
              data-testid="checkout-phone"
              placeholder="Telefone"
              type="text"
              required
            />
            <input
              data-testid="checkout-cep"
              placeholder="CEP"
              type="text"
              required
            />
            <input
              data-testid="checkout-address"
              placeholder="Endereço"
              type="text"
              required
            />
            <button type="submit">Comprar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default FinishCart;
