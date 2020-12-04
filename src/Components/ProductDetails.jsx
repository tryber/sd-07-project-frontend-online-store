import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.getDetailProduct = this.getDetailProduct.bind(this);
    this.submitComent = this.submitComent.bind(this);

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

  submitComent() {
    const email = document.getElementById('userEmail').value;
    const msg = document.getElementById('mensageUser').value;
    const listReviews = document.getElementById('reviews');
    const block = `<div className="coment">Usuario: ${email} <br> Mensagem: ${msg}</div>`;
    listReviews.innerHTML = block;
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
          data-testid="product-detail-add-to-cart"
        >
          Comprar
        </Link>
        <Link to="/cart/0" className="btn-cart">
          Cart
        </Link>
        <Link to="/" className="btn-back">
          Voltar
        </Link>
        <div className="review-detail">
          <h3>Deixe sua opinião</h3>
          <form>
            <input
              type="email"
              placeholder="E-mail: exemplo@exemplo.com"
              id="userEmail"
            />
            <textarea
              cols="33"
              rowls="5"
              placeholder="Mensagem opcional"
              data-testid="product-detail-evaluation"
              id="mensageUser"
            />
          </form>
          <button type="submit" onClick={ this.submitComent } className="btn-comment">
            Avaliar
          </button>
          <div className="reviews">
            <ul id="reviews">

            </ul>
          </div>
        </div>
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
