import React from 'react';
import { Link } from 'react-router-dom';
import voltar from '../icon/voltar.png';
import '../App.css';
import ItemCart from '../components/ItemCart';

class ShoppinCart extends React.Component {
  constructor() {
    super();
    this.loadStorage = this.loadStorage.bind(this);
    this.unloadStorage = this.unloadStorage.bind(this);
    this.state = {
      cartItem: [],
    };
  }

  componentDidMount() {
    this.loadStorage();
  }

  unloadStorage() {
    const { cartItem } = this.state;
    cartItem.forEach((item) => {
      localStorage.setItem(item.name, item.price);
    });
  }

  componentWillUnmount() {
    this.unloadStorage();
  }

  loadStorage() {
    for (const count = 0; count < localStorage.length; count += 1) {
      const item = {
        name: localStorage.key(count),
        price: localStorage.getItem(localStorage.key(count)),
      };
      const { cartItem } = this.state;
      cartItem.push(item);
      this.setState({ cartItem: cartItem });
    }
    localStorage.clear();
  }

  render() {
    const { cartItem } = this.state;

    return (
      <div className="cart">
        {cartItem.map((item) => {
          const { name, price } = item;
          return <ItemCart key={ name } name={ name } price={ price } qtde={ 1 } />;
        })}
        <h3 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h3>
        <Link to="/">
          <img className="voltar" src={ voltar } alt="imagem-Voltar" />
        </Link>
      </div>
    );
  }
}

export default ShoppinCart;
