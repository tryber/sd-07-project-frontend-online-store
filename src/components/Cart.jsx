import React, { Component } from 'react';
import remove from './img/remove.png';
import add from './img/add-circle.png';
import removeitem from './img/remove-from-basket.png';

class Cart extends Component {
<<<<<<< HEAD
  sumCart() {
  let cartitems = JSON.parse(localStorage.getItem('cartItems'));
  let sumcart = 0;
  cartitems.map((sum) => sumcart+(sum.qtd * sum.price));
  return sumcart;
  }
  render () {
    const cartitems = JSON.parse(localStorage.getItem('cartItems'));
    return (
      cartitems.map((item) => <div>
=======
  constructor(props) {
    super();
    this.sumCart = this.sumCart.bind(this);
    this.state = {
      sumCart: 0,
    }
  }

  componentDidMount(){
    this.sumCart();
  }

  sumCart() {
    let cartitems = JSON.parse(localStorage.getItem('cartItems'));
    let summ = 0;
    cartitems.map((sum) => summ += sum.qtd * sum.price);
    this.setState({ sumCart: summ });
    console.log(summ);
  }
  render() {
    const cartitems = JSON.parse(localStorage.getItem('cartItems'));
    return (
      <div>
      {cartitems.map((item) => (
      <div>
>>>>>>> e7953a05e103e4c07cb64bacd451d0beb11055d8
        <img src={removeitem} alt="Remover item" />
        <img src={item.thumbnail} alt={item.title} />
        <p>{item.title}</p>
        <img src={remove} alt="retirar" />
        <p>{item.qtd}</p>
        <img src={add} alt="adicionar" />
<<<<<<< HEAD
        <p>{(item.qtd * item.price)}</p>
      </div>
      ))}
=======
        <p>{item.qtd * item.price}</p>
      </div>
    ))}
      <h3>Valor Total da Compra: {this.state.sumCart}</h3>
    </div>
    )
  }
>>>>>>> e7953a05e103e4c07cb64bacd451d0beb11055d8
}

export default Cart;
