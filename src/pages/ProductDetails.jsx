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
      this.setState({ comentFix: comentFix.concat(avaliação) })
    }
  }

  inputs(event) {
    this.setState({ [event.target.name]: event.target.value })
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

          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetails;