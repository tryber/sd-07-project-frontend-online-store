import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import Rating from '../components/Rating';
import DetailsForm from '../components/DetailsForm';
import addToCart from '../services/addToCart';


class Details extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      product: [],
      name: '',
      rate: '',
      evaluation: '',
      ratings: [],
    };
    this.fetchAPI = this.fetchAPI.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.filterEvaluations = this.filterEvaluations.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
    if (localStorage.getItem('evaluations') === null) {
      localStorage.setItem(
        'evaluations',
        JSON.stringify([
          ['id', 'nome', 'nota', 'comentário'],
          ['id', 'nome', 'nota', 'comentário'],
        ]),
      );
    }
    this.filterEvaluations();
  }

  filterEvaluations() {
    const evaluations = JSON.parse(localStorage.getItem('evaluations'));
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.setState({
      ratings: evaluations.filter((rate) => rate[0] === id),
    });
  }

  addToCart() {
    const { product } = this.state;
    addToCart(product);
  }

  async fetchAPI() {
    const { match } = this.props;
    const { params } = match;
    const { category, searchKey, id } = params;
    const resp = await api.getProductsFromCategoryAndQuery(category, searchKey);
    this.setState({
      loading: false,
      product: resp.results.find((product) => product.id === id),
    });
  }

  handleState(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const { name, rate, evaluation } = this.state;
    const evaluations = JSON.parse(localStorage.getItem('evaluations'));
    console.log(evaluations);
    evaluations.push([id, name, rate, evaluation]);
    localStorage.setItem('evaluations', JSON.stringify(evaluations));
    this.setState({
      ratings: evaluations.filter((evalu) => evalu[0] === id),
    });
  }

  render() {
    const { loading, product, ratings } = this.state;
    if (loading) {
      return <h2>LOADING</h2>;
    }
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">
          Carrinho de compras
        </Link>
        <h2 data-testid="product-detail-name">{product.title}</h2>
        <img src={ product.thumbnail } alt="thumb" />
        <p>{product.price}</p>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.addToCart }
        >
          Adicionar ao carrinho
        </button>
        <div className="evaluation">
          <DetailsForm
            handleState={ this.handleState }
            handleSubmit={ this.handleSubmit }
          />
          <section>
            <Rating ratings={ ratings } />
          </section>
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      searchKey: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Details;
