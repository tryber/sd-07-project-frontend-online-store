/* eslint-disable no-unused-expressions */
import React from 'react';
import { Link } from 'react-router-dom';

class Carrinho extends React.Component {
  constructor(props) {
    super(props);
    this.saveState = this.saveState.bind(this);
    this.state = {
      empty: true,
      objeto: [],
      total: 0,
    };
  }

  componentDidMount() {
    this.saveState();
    this.getTotal();
    this.saveStateTwo();
  }

  componentDidUpdate() {
    const { objeto, total } = this.state;
    localStorage.setItem('dataCart', JSON.stringify(objeto));
    localStorage.setItem('dataTotal', JSON.stringify(total));
  }

  getTotal() {
    const { objeto } = this.state;
    const num = 0;
    const res = objeto.reduce((prev, item) => prev + item.price * item.quantity, num);
    this.setState({
      total: res,
    });
  }

  removeProduct(id) {
    if (window.confirm('Do you want to delete this product?')) {
      const { objeto } = this.state;
      objeto.forEach((item, index) => {
        if (item.id === id) {
          objeto.splice(index, 1);
        }
      });
      this.setState({ objeto });
      this.getTotal();
    }
  }

  reduction(id) {
    const { objeto } = this.state;
    objeto.forEach((item) => {
      if (item.id === id) {
        if (item.quantity === 1) {
          (item.quantity = 1);
        } else {
          (item.quantity -= 1);
        }
      }
    });
    this.setState(objeto);
    this.getTotal();
  }

  increase(id) {
    // console.log(`Deu: ${id} `)
    const { objeto } = this.state;
    objeto.forEach((item) => {
      if (item.id === id) {
        item.quantity += 1;
      }
    });
    this.setState({ objeto });
    this.getTotal();
  }

  async saveState() {
    const saveObj = await JSON.parse(localStorage.getItem('cart'));
    this.setState({
      objeto: saveObj,
    });
    const { objeto } = this.state;
    if (objeto === null) {
      this.setState({ empty: true });
    } else {
      this.setState({ empty: false });
    }
  }

  async saveStateTwo() {
    const dataCart = JSON.parse(localStorage.getItem('dataCart'));
    if (dataCart !== null) {
      this.setState({
        objeto: dataCart,
      });
    }
    const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
    if (dataTotal !== null) {
      this.setState({
        total: dataTotal,
      });
    }
  }

  render() {
    const { empty, objeto, total } = this.state;
    return empty === true ? (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    ) : (
      <div>
        {objeto.map((item) => (
          <div key={ item.id }>
            <h2 data-testid="shopping-cart-product-name">{ item.title }</h2>
            <h3>
              $
              { item.price * item.quantity }
            </h3>
            <p>{ item.price }</p>
            <img src={ item.thumbnail } alt="imagem do produto" />
            <div className="amount">
              <button
                type="button"
                data-testid="product-decrease-quantity"
                className="count"
                onClick={ () => this.reduction.bind(this)(item.id) }
              >
                -
              </button>
              <span data-testid="shopping-cart-product-quantity">
                { item.quantity }
              </span>
              <button
                type="button"
                data-testid="product-increase-quantity"
                className="count"
                onClick={ () => this.increase.bind(this)(item.id) }
              >
                +
              </button>
            </div>
            <button
              type="button"
              className="delete"
              onClick={ () => this.removeProduct.bind(this)(item.id) }
            >
              X
            </button>
          </div>
        ))}
        <div className="total">
          <h3>
            Total: $
            {total}
          </h3>
          <Link
            data-testid="checkout-products"
            to="payment"
          >
            Payment
          </Link>
        </div>
      </div>
    );
  }
}

export default Carrinho;
