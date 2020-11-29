import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import {
  CardDetailsContainer,
  CardDetailsContent,
  CardTitle,
  ShoppingCartIcon,
} from './styles';

class CardDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = { product: {} };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const { match } = this.props;
    const { id } = match.params;
    let { category, query } = match.params;

    if (category === '0') category = '';
    if (query === '0') query = '';

    const { results } = await getProductsFromCategoryAndQuery(category, query);
    const product = results.find((result) => result.id === id);
    this.setState({ product });
  }

  render() {
    const { match } = this.props;
    const { id } = match.params;
    let { category, query } = match.params;

    if (category === '0') category = '';
    if (query === '0') query = '';

    const { product } = this.state;
    const { title } = product;
    return (
      <CardDetailsContainer>
        <CardDetailsContent>
          <Link to="/shopping-cart" data-testid="shopping-cart-button">
            <ShoppingCartIcon />
          </Link>
          <CardTitle data-testid="product-detail-name">
            { title }
          </CardTitle>
          <Link
            to={ `/shopping-cart/${category}/${query}/${id}` }
            data-testid="product-detail-add-to-cart"
          >
            Adicionar ao carrinho
          </Link>
        </CardDetailsContent>
      </CardDetailsContainer>
    );
  }
}

CardDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      query: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CardDetails;
