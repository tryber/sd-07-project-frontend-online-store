import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import CommentsList from '../components/CommentsList';
import CommentForm from '../components/CommentForm';

class ProductDetail extends Component {
  constructor() {
    super();

    this.getProduct = this.getProduct.bind(this);
    this.callingFirst = this.callingFirst.bind(this);
    this.commentSubmit = this.commentSubmit.bind(this);
    this.getLocalStorage = this.getLocalStorage.bind(this);
    this.setLocalStorage = this.setLocalStorage.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.state = {
      name: '',
      imagePath: '',
      price: 0,
      details: [],
      comments: [],
    };
  }

  componentDidMount() {
    this.callingFirst();
  }

  async getProduct() {
    const { match } = this.props;
    const { id, categoryId } = match.params;
    const { results } = await api.getProductsFromCategoryAndQuery(categoryId, '');
    const productDetail = results.filter((result) => result.id === id);

    this.setState({
      name: productDetail[0].title,
      imagePath: productDetail[0].thumbnail,
      price: productDetail[0].price,
      details: productDetail[0].attributes,
    });
  }

  getLocalStorage() {
    const { name } = this.state;

    if (localStorage.getItem(`${name}`)) {
      this.setState({ comments: JSON.parse(localStorage.getItem(`${name}`)) });
    }
  }

  setLocalStorage(commentObject) {
    const { name } = this.state;

    const arrayOfComments = localStorage.getItem(`${name}`)
      ? JSON.parse(localStorage.getItem(`${name}`))
      : [];

    arrayOfComments.push(commentObject);

    localStorage.setItem(`${name}`, JSON.stringify(arrayOfComments));

    this.setState({ comments: JSON.parse(localStorage.getItem(`${name}`)) });
  }

  commentSubmit(comment) {
    this.setLocalStorage(comment);
  }

  async callingFirst() {
    await this.getProduct();
    this.getLocalStorage();
  }

  addToCart() {
    const { match } = this.props;
    const { name, imagePath, price } = this.state;
    const { id } = match.params;
    const title = name;
    const thumbnail = imagePath;
    const { addItem } = this.props;
    addItem({ title, thumbnail, price, id, quantity: 1 });
  }

  render() {
    const { name, imagePath, price, details, comments } = this.state;
    return (
      <>
        <div data-testid="product-detail-name">
          <Link to="/">Home</Link>
          <h1>Product Detail</h1>
          <p>
            Name:
            {' '}
            <span>{name}</span>
          </p>
          <img src={ imagePath } alt={ name } />
          <p>
            Price:
            {' '}
            <span>{price}</span>
          </p>
          <div>
            Details:
            {' '}
            {
              details.map((element) => (
                <div key={ element.id }>
                  {element.name}
                  {' '}
                  -
                  {' '}
                  <span>{element.value_name}</span>
                </div>))
            }
            ,
          </div>
        </div>
        <CommentForm onClick={ this.commentSubmit } />
        <CommentsList comments={ comments } />
        <button
          type="submit"
          onClick={ () => this.addToCart() }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
      </>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      categoryId: PropTypes.string,
    }).isRequired,
  }).isRequired,
  addItem: PropTypes.func.isRequired,
};

export default ProductDetail;
