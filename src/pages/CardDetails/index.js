import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { getProductsFromCategoryAndQuery } from '../../services/api';

import {
  CardDetailsContainer,
  CardDetailsContent,
  CardTitle,
  Image,
  Price,
  ShoppingCartIcon,
} from './styles';

import CardDetailsForm from '../../components/CardDetailsForm';

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

    const { product } = this.state;
    const { id: idProduct, title, thumbnail, price } = product;
    return (
      <CardDetailsContainer>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <ShoppingCartIcon />
        </Link>
        <CardDetailsContent>
          <CardTitle data-testid="product-detail-name">
            { title }
          </CardTitle>
          <Price>{ `RS ${price},00` }</Price>
          <Image src={ thumbnail } alt={ title } />
          <Link
            to={ `/shopping-cart/${category}/${query}/${id}` }
            data-testid="product-detail-add-to-cart"
          >
            Adicionar ao carrinho
          </Link>
          <CardDetailsForm idProduct={ idProduct } />
        </CardDetailsContent>
      </CardDetailsContainer>
    );
  }
}

CardDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      category: PropTypes.string,
      query: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

CardDetails.defaultProps = {
  match: {
    params: {
      category: '0',
      query: '0',
    },
  },
};

export default CardDetails;
