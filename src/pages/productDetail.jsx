import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.fetchProduct = this.fetchProduct.bind(this);
    this.productLoaded = this.productLoaded.bind(this);
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
      quantidade: 0,
    });
  }

  productAdd() {
    const { product } = this.state;
    const { title } = product;
    let { quantidade } = this.state;
    const max = 99;
    return (
      <div>
        <div>
          <button
            data-testid=""
            type="submit"
            onClick={ () => {
              if (quantidade < 1) {
                return this.setState({ quantidade: 0 });
              }
              this.setState({ quantidade: quantidade -= 1 });
            } }
          >
            -
          </button>
          <div>{quantidade}</div>
          <button
            data-testid=""
            type="submit"
            onClick={ () => {
              if (quantidade > max) {
                return this.setState({ quantidade: 100 });
              }
              this.setState({ quantidade: quantidade += 1 });
            } }
          >
            +
          </button>
        </div>
        <button
          data-testid="product-detail-add-to-cart"
          type="submit"
          onClick={ () => console.log(title + quantidade) }
        >
          ADICIONAR PRODUTO
        </button>
      </div>
    );
  }

  productLoaded() {
    const { product } = this.state;
    const { title, price, thumbnail, attributes } = product;
    return (
      <div data-testid="product-detail-name">
        <h4>{title}</h4>
        <h3>{`R$${price}`}</h3>
        <img alt="product Cover" src={ thumbnail } />
        <ul>
          {attributes.map((a) => (
            <li key={ a.name }>{`${a.name}: ${a.value_name}`}</li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        {loading ? <p>Loading</p> : this.productLoaded()}
        {loading ? <div>Loading</div> : this.productAdd()}
        {loading
          ? <div>Loading</div>
          : <Link to="/shoppingCart"> Carrinho de compras </Link>}
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
