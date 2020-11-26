import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import ShoppingCartIcon from '../components/Shopping-cart-icon';

class ProductDetails extends React.Component {
  constructor() {
    super()
    this.apiRequest = this.apiRequest.bind(this);
    this.handleFitered = this.handleFitered.bind(this);
    this.state = {
      itemRecived: {},
    }
  }

  async apiRequest(params) {
    const productList = await api.getProductsFromCategoryAndQuery(params, "");
    this.handleFitered(productList);
  }

  handleFitered(productList) {
    const { id } = this.props.match.params;
    const { results } = productList;
    const productRecived = results.filter(produc => produc.id === id);
    this.setState({ itemRecived: productRecived[0] });
  }

  handleClick() {
    const { id, title, price } = this.state.itemRecived;
    const qtd = 1;
    //console.log(id, title, price, qtd)
    console.log('clicou');
    let cartItemsStorage = JSON.parse(localStorage.getItem('cartItems'));

    cartItemsStorage.forEach((cartitemId, i) => {
      if (cartitemId.id === id ) {
        console.log('igual na posição', i);
      } else {
        cartItemsStorage.push({ id, title, price, qtd });
        localStorage.setItem('cartItems', JSON.stringify(cartItemsStorage));
      }
    });
    // cartItemsStorage = JSON.parse(localStorage.getItem('cartItems'));
    // console.log(cartItemsStorage[0].qtd);
  }

  componentDidMount() { 
    const { category } = this.props.match.params;
    this.apiRequest(category);
  }

  render() {
    const { thumbnail, title, price } = this.state.itemRecived;
    return (
      <div>
        <div>
          <Link to="/">Voltar icon</Link>
          <ShoppingCartIcon />
        </div>
        <img src={thumbnail} alt={title}/>
        <div>
          <h1 data-testid="product-detail-name">{title}</h1>
          <h3>R$: {price}</h3>
          <button onClick={() => this.handleClick()} data-testid="product-detail-add-to-cart">Adicionar ao Carrinho</button>
        </div>
      </div>
    )
  }
}

export default ProductDetails;