import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import ShoppingCartIcon from '../components/Shopping-cart-icon';

class ProductDetails extends React.Component {
  constructor() {
    super()
    this.apiRequest = this.apiRequest.bind(this);
    this.handleFitered = this.handleFitered.bind(this);
    this.checkCartOnAdd = this.checkCartOnAdd.bind(this);
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
    const { id, title, price, thumbnail } = this.state.itemRecived;
    const qtd = 1;
    //console.log(id, title, price, qtd)
    //console.log('clicou');
    let cartItemsStorage = JSON.parse(localStorage.getItem('cartItems'));
    if (this.checkCartOnAdd(id)) {
      console.log('entrou');
      cartItemsStorage.push({ id, title, price, thumbnail, qtd });
      localStorage.setItem('cartItems', JSON.stringify(cartItemsStorage));
    }
    cartItemsStorage = JSON.parse(localStorage.getItem('cartItems'));
  }

  checkCartOnAdd(idItem) {
    const cartItemsStorage = JSON.parse(localStorage.getItem('cartItems'));
    for (let i = 0; i  < cartItemsStorage.length; i += 1 ) {
      if (cartItemsStorage[i].id === idItem) {
        cartItemsStorage[i].qtd += 1;
        localStorage.setItem('cartItems', JSON.stringify(cartItemsStorage));
        return false;
      }
    }
    return true;
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