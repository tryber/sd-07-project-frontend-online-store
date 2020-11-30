import React from 'react';
import { Link } from 'react-router-dom';
import States from '../components/States';
import voltar from '../components/img/undo.png';
import bitcon from '../components/img/bitcoin.png';
import visa from '../components/img/visa.png';
import master from '../components/img/payment.png';
import paypal from '../components/img/paypal.png';
import scan from '../components/img/scan-barcode-for-payment.png';

class Payment extends React.Component {
  constructor() {
    super();
    this.sumCart = this.sumCart.bind(this);
    this.state = {
      sumCart: 0,
    };
  }

  componentDidMount() {
    this.sumCart();
  }

  sumCart() {
    const len = [];
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    const summ = (sum, addValue) => sum + (addValue.qtd * addValue.price);
    const cartTotal = cartItems.reduce(summ, len.length);
    this.setState({ sumCart: cartTotal });
  }

  render() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    const { sumCart } = this.state;
    return (
      <div>
        <div className="barraH">
          <Link to="/shoppingcart">
            <img className="imagem" src={ voltar } alt="voltar" />
          </Link>
        </div>
        <div>
          <div>
            <h3>Revise seus produtos</h3>
            <div className="barrapesquisa">
              {
                cartItems.map((item) => (
                  <div key={ item.id } className="produto2">
                    <img src={ item.thumbnail } alt={ item.title } />
                    <p data-testid="shopping-cart-product-name">{item.title}</p>
                    <p>{`R$ ${item.qtd * item.price}`}</p>
                  </div>
                ))
              }
            </div>
            <h3>{`total: R$ ${sumCart}`}</h3>
          </div>
        </div>
        <div>
          <h3>Informações do Comprador</h3>
          <form>
            <input
              data-testid="checkout-fullname"
              required
              placeholder="Nome
              Completo"
              type="text"
            />
            <input
              data-testid="checkout-cpf"
              required
              maxLength="11"
              placeholder="CPF"
              type="text"
            />
            <input
              data-testid="checkout-email"
              required
              placeholder="Email"
              type="text"
            />
            <input
              data-testid="checkout-phone"
              required
              placeholder="Telefone"
              type="text"
            />
            <input
              data-testid="checkout-cep"
              required
              placeholder="CEP"
              type="text"
            />
            <input
              data-testid="checkout-address"
              required
              placeholder="Endereço"
              type="text"
            />
            <select>
              <option value="">Estado</option>
              <States />
            </select>
            <div>
              <h3>Método de Pagamento</h3>
            </div>
            <label htmlFor="b">
              <input id="b" type="radio" value="bitcon" name="pagamento" />
              <img className="imagem" src={ bitcon } alt="bitcon" />
            </label>
            <label htmlFor="v">
              <input id="v" type="radio" value="visa" name="pagamento" />
              <img className="imagem" src={ visa } alt="visa" />
            </label>
            <label htmlFor="m">
              <input id="m" type="radio" value="master" name="pagamento" />
              <img className="imagem" src={ master } alt="master" />
            </label>
            <label htmlFor="p">
              <input id="p" type="radio" value="paypal" name="pagamento" />
              <img className="imagem" src={ paypal } alt="paypal" />
            </label>
            <label htmlFor="bo">
              <input id="bo" type="radio" value="scan" name="pagamento" />
              <img className="imagem" src={ scan } alt="boleto" />
            </label>
            <div>
              <button type="submit"><Link to="/">Comprar</Link></button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Payment;
