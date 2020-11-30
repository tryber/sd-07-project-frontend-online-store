import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

// import { getProductDetail } from '../services/api'
import Loading from '../components/Loading';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchProductDetails = this.fetchProductDetails.bind(this);
    this.updateLocalStorage = this.updateLocalStorage.bind(this);
    this.updateState = this.updateState.bind(this);

    this.state = {
      loading: true,
      productDetail: {},
      productDescription: [],
      productReviews: [],
    };
  }

  componentDidMount() {
    this.fetchProductDetails();
  }

  backPage() {
    window.history.back();
  }

  fetchProductDetails() {
    this.setState({ loading: true },
      async () => {
        const { id } = this.props;
        const productDet = await fetch(`https://api.mercadolibre.com/items/${id}`).then((r) => r.json());
        const prodDesc = await fetch(`https://api.mercadolibre.com/items/${id}/descriptions`).then((r) => r.json());
        let reviewList = [];

        if (localStorage.getItem(`${id}-reviews`)) {
          reviewList = JSON.parse(localStorage.getItem(`${id}-reviews`));
        } else {
          const reviews = await fetch(`https://api.mercadolibre.com/reviews/item/${id}`).then((r) => r.json());
          reviewList = reviews.reviews;
        }

        this.setState(() => ({
          productDetail: productDet,
          loading: false,
          productDescription: prodDesc,
          productReviews: reviewList,
        }
        ));

        this.updateLocalStorage();
      });
  }

  updateState() {
    // event.defaultPrevented();
    const { productReviews: actualReviews } = this.state;
    const { value: email } = document.getElementById('email');
    const { value: rateReview } = document.getElementById('rate');
    const { value: message } = document.getElementById('message');
    const idReview = email.concat(message);
    const newReview = {
      id: idReview,
      rate: rateReview,
      content: message,
    };

    actualReviews.push(newReview);
    this.updateLocalStorage(actualReviews);
    this.setState(() => ({ productReviews: actualReviews }));
  }

  async updateLocalStorage() {
    const { id } = this.props;
    const { productReviews } = this.state;
    localStorage.setItem(`${id}-reviews`, JSON.stringify(productReviews));
  }

  render() {
    const { loading, productDetail, productDescription, productReviews } = this.state;
    const { addCart } = this.props;

    if (loading) return <Loading />;

    const { title, price } = productDetail;
    const thumbnail = productDetail.pictures[0].url;
    let { plain_text: productDesc } = productDescription[0];
    productDesc = productDesc.split(/\n/);

    return (
      <div className="product">
        <div className="buttons-link">
          <button type="submit" onClick={ this.backPage }>Voltar</button>
          <Link data-testid="shopping-cart-button" to="/cart">
            <FontAwesomeIcon icon={ faShoppingCart } />
          </Link>
        </div>
        <div className="product-details">
          <div className="product-information">
            <h4 data-testid="product-detail-name">
              { title }
            </h4>
            <h4>
              R$
              { price }
            </h4>
            <img src={ thumbnail } alt="imagem do produto" />
          </div>
          <div className="product-detail-text">
            <p>
              { productDesc.map((desc, index) => {
                if (desc === '') return <span key={ desc.concat(index) }><br /></span>;
                return (
                  <span key={ desc.concat(index) }>
                    {desc}
                    <br />
                  </span>
                );
              })}
            </p>
            <button
              type="button"
              data-testid="product-detail-add-to-cart"
              onClick={ () => addCart(productDetail) }
            >
              ADICIONAR
            </button>
          </div>
        </div>
        {/* Review Form */}
        <div className="review">
          <h2 className="review-header">Avaliações:</h2>
          <form className="review-form">
            <div>
              <input type="text" placeholder="Email" name="email" id="email" />
              <input type="number" placeholder="0" min="0" max="5" id="rate" />
            </div>
            <textarea
              data-testid="product-detail-evaluation"
              placeholder="Mensagem (opcional)"
              id="message"
            />
            <button type="submit" onClick={ this.updateState }>Enviar</button>
          </form>
        </div>
        {/* Get Reviews information! */}
        <div className="reviews-list">
          {productReviews
            .map(({ id, rate, content }) => (
              <div key={ id } className="review">
                <span>
                  Usuário:
                  { id }
                </span>
                <span>
                  Avaliação:
                  { rate }
                </span>
                <p>
                  { content }
                </p>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = ({
  addCart: PropTypes.func,
  id: PropTypes.string,
}).isRequired;

export default ProductDetails;
