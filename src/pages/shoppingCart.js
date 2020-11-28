import React, { Component } from 'react';

class shoppingCart extends Component {
  constructor(props) {
    super(props);
    this.shoppingCartMount = this.shoppingCartMount.bind(this);
    this.increaseDecrease = this.increaseDecrease.bind(this);
    this.totalSum = this.totalSum.bind(this);
    this.state = {
      shoppingList: [{
        product: {
          title: 'sapato',
          price: 100,
          thumbnail: 'thumbnail',
          id: 'asd',
        },
        quantity: 1,
      },
      {
        product: {
          title: 'carro',
          price: 50,
          thumbnail: 'thumbnail_carro',
          id: 'qwe',
        },
        quantity: 2,
      }
      ] ,
    }
  }

  increaseDecrease(idItem, action) {
    // const { shoppingList } = this.state;
    // shoppingList.find(item => {
    //   const {id}
    // })
    // if(action === 'increase') {
    // } else {
    // }
  }

  componentDidMount() {
    const list = JSON.parse(localStorage.getItem('cart'));
    
    this.setState(() => ({
      shoppingList: list ? list : [{
        product: {
          title: 'sapato',
          price: 100,
          thumbnail: 'thumbnail',
          id: 'asd',
        },
        quantity: 3 ,
      },
      {
        product: {
          title: 'carro',
          price: 50,
          thumbnail: 'thumbnail_carro',
          id: 'qwe',
        },
        quantity: 2,
      }
      ],
    }), console.log(this.state.shoppingList))
  }

  shoppingCartMount() {
    const { shoppingList } = this.state;
    if (shoppingList.length === 0) {
      return (
        <div>
          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        </div>)
    }
    // Tudo abaixo daqui pressupõe que no state tem um array no formato shoppingList [{},{}] com chaves product e quantity
    return shoppingList.map(item => {
      const { title, thumbnail, price, id } = item.product;
      const { quantity } = item;
      return (
        <div key={id} className="cartItem">
          <div className='cartDescription'>
            <img className='thumbnail' alt="Product" src={thumbnail} />
            <p>{title}</p>
            <p>{price}</p>
            <p>{quantity}</p>
          </div>
          <button data-testid='product-increase-quantity' onClick={() => { this.increaseDecrease(id, 'increase') }}>+</button>
          <button data-testid='product-decrease-quantity' onClick={() => { this.increaseDecrease(id, 'decrease') }}>-</button>
          <button>X</button>
        </div>
      )
    })
  }

  totalSum() {
    const { shoppingList } = this.state;
    const sum = shoppingList.map(item => {
      const { product, quantity } = item;
      const { price } = product;
      return price * quantity;
    }).reduce((x, y) => x + y)
    return (
      <div>
        <h2>Total</h2>
        <h2>{sum}</h2>
      </div>
    )
  }

  // async fetchProductsById(id) {
  //   const result = await getProductsFromCategoryAndQuery(
  //     undefined,
  //     undefined,
  //     id,
  //   );
  //   return result[0] ? result[0].body : result.results[0]
  // }

  render() {

    return (
      <div>
        <h1>Shopping Cart</h1>
        <this.shoppingCartMount />
        <this.totalSum />
      </div>

    )

  }
}
export default shoppingCart;
