import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.getDetailProduct = this.getDetailProduct.bind(this);
  }

  componentDidMount() {
    this.getDetailProduct();
  }

  getDetailProduct() {
    const { match } = this.props;
    const { id } = match.params;
    const {
      location: { state: product },
    } = this.props;
    const result = product.filter((acc) => acc.id === id);
    return result;
  }

  render() {
    const product = this.getDetailProduct();
    return (
      <div className="container-detail">
        <h3 data-testid="product-detail-name">{product[0].title}</h3>
        <div className="container-inner">
          <img src={ product[0].thumbnail } alt="Produto" />
          <div className="detail-product">
            <span className="label">Condição:</span>
            {product[0].condition}
            <span className="label">Quantidade disponivel:</span>
            {product[0].available_quantity}
            <span className="label">Preço:</span>
            {product[0].price}
          </div>
        </div>
        <Link
          to={ { pathname: `/cart/${product[0].id}`,
            state: product[0] } }
          className="btn-add-cart"
        >
          Comprar
        </Link>
        <Link to="/cart/0" className="btn-cart">
          Cart
        </Link>
        <Link to="/" className="btn-back">
          Voltar
        </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
