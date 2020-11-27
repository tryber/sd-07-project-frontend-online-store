import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import ShoppingCartIcon from '../components/Shopping-cart-icon';
import Stars from '../components/Stars';

class ProductDetails extends React.Component {
  constructor() {
    super()
    this.apiRequest = this.apiRequest.bind(this);
    this.handleFitered = this.handleFitered.bind(this);
    this.checkCartOnAdd = this.checkCartOnAdd.bind(this);
    this.getnota = this.getnota.bind(this);
    this.butfunc = this.butfunc.bind(this);
    this.inputs =this.inputs.bind(this);
    this.state = {
      itemRecived: {},
      Email: "",
      nota: "",
      comentario: "",
      comentFix: [],
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
    let cartItemsStorage = JSON.parse(localStorage.getItem('cartItems'));
    if (this.checkCartOnAdd(id)) {
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

  getnota(nota) {
    this.setState({ nota });
  }

  butfunc() {
    const { Email, comentario, nota, comentFix } = this.state;
    const avaliação = { Email, comentario, nota };
    if (Email !== "") {
      this.setState({ comentFix: comentFix.concat(avaliação) });
    }
  }

  inputs(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { thumbnail, title, price } = this.state.itemRecived;
    const { Email, comentario } = this.state;
    return (
      <div>
        <div>
          <div>
            <Link to="/">Voltar icon</Link>
            <ShoppingCartIcon />
          </div>
          <img src={thumbnail} alt={title}/>
          <div>
            <h1 data-testid="product-detail-name">{title}</h1>
            <h3>R$: {price}</h3>
            <input
              data-testid="product-detail-add-to-cart"
              type="button"
              onClick={() => this.handleClick()}
              data-testid="product-detail-add-to-cart"
              value="Adicionar ao Carrinho"
            />
          </div>
        </div>
        <div>
          <h2>avaliação</h2>
          <form action="">
            <div>
              <textarea
                data-testid="product-detail-evaluation"
                type="text"
                name="Email"
                placeholder="E-mail"
                value={Email}
                onChange={this.inputs}
                required
              />
              <Stars astronomo={this.getnota}/>
            </div>
            <textarea
              type="text"
              name="comentario"
              placeholder="Comentario
              (opcional)" value={comentario}
              rows={4}
              onChange={this.inputs}
            />
            <input type="button" value="enviar" onClick={this.butfunc}/>
          </form>
          <div>
            //comentarios
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetails;
