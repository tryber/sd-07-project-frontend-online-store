import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import * as localStorage from '../services/localStorage';
import EvaluationForm from '../components/evaluationForm';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.fetchProduct = this.fetchProduct.bind(this);
    this.productLoaded = this.productLoaded.bind(this);
    this.productAdd = this.productAdd.bind(this);
    this.state = {
      loading: true,
      product: [],
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }

  async fetchProduct() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const endpoint = `https://api.mercadolibre.com/items/${id}`;
    const response = await fetch(endpoint);
    const fetchedProduct = await response.json();
    this.setState({
      product: fetchedProduct,
      loading: false,
      quantity: 1,
    });
  }

  addToCart(product) {
    localStorage.saveProductIntoShoppingCart(product);
  }

  productAdd() {
    const { product } = this.state;
    const { id, title, price } = product;
    let { quantity } = this.state;
    const max = 99;

    return (
      <div>
        <div>
          <Button
            variant="contained"
            color="default"
            data-testid=""
            type="submit"
            onClick={ () => {
              if (quantity < 1) {
                return this.setState({ quantity: 0 });
              }
              this.setState({ quantity: (quantity -= 1) });
            } }
          >
            -
          </Button>
          <div>
            <h4>{ quantity }</h4>
          </div>
          <Button
            variant="contained"
            color="default"
            data-testid=""
            type="submit"
            onClick={ () => {
              if (quantity > max) {
                return this.setState({ quantity: 100 });
              }
              this.setState({ quantity: (quantity += 1) });
            } }
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          color="primary"
          data-testid="product-detail-add-to-cart"
          type="submit"
          onClick={ () => this.addToCart({ price, id, title, quantity }) }
        >
          Adicionar ao carrinho de compras
        </Button>
      </div>
    );
  }

  productLoaded() {
    const { product } = this.state;
    const { title, price, thumbnail, attributes } = product;
    return (
      <div data-testid="product-detail-name">
        <h3>{title}</h3>
        <h4>{`R$${price}`}</h4>
        <img alt="product Cover" src={ thumbnail } />
        <ul>
          { attributes.map((a) => (
            <li key={ a.name }>{`${a.name}: ${a.value_name}`}</li>
          )) }
        </ul>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        { loading ? <p>Loading</p> : this.productLoaded() }
        <EvaluationForm />
        { loading ? <div>Loading</div> : this.productAdd() }
        { loading ? (
          <div>Loading</div>
        ) : (
          <Link data-testid="shopping-cart-button" to="/shoppingCart">
            <ShoppingCartIcon color="action" fontSize="large" />
          </Link>
        ) }
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.object.isRequired,
  }).isRequired,
};

export default ProductDetail;
