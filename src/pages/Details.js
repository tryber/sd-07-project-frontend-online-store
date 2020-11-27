import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class Details extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      product: [],
      evaluation: '',
    };
    this.fetchAPI = this.fetchAPI.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
    if (localStorage.getItem('evaluations') === null) {
      localStorage.setItem('evaluations', JSON.stringify([['id', 'comentario']]));
    }
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
    this.setState({
      evaluation: e.target.value,
    });
  }

  handleSubmit() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const { evaluation } = this.state;
    const evaluations = JSON.parse(localStorage.getItem('evaluations'));
    evaluations.push([id, evaluation]);
    localStorage.setItem('evaluations', evaluations);
  }

  render() {
    const { loading, product } = this.state;
    if (loading) {
      return <h2>LOADING</h2>;
    }
    return (
      <div>
        <h2 data-testid="product-detail-name">{product.title}</h2>
        <img src={ product.thumbnail } alt="thumb" />
        <p>{product.price}</p>
        <div className="evaluation">
          <form>
            <label htmlFor="type">
              adicione sua avaliação
              <textarea
                data-testid="product-detail-evaluation"
                type="text"
                id="type"
                onChange={this.handleState}
              />
            </label>
          </form>
          <button type="button" onClick={ this.handleSubmit }>
            Submit
          </button>
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
