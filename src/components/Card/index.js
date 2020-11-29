import React from 'react';
import PropTypes from 'prop-types';
import { CardContainer, CardContent, Image, Price, Title } from './styles';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render() {
    let { product, category, query } = this.props;

    if (category === '') category = '0';
    if (query === '') query = '0';

    const { id, title, price, thumbnail } = product;
    return (
      <CardContainer data-testid="product">
        <CardContent>
          <Title>{ title }</Title>
          <Price>{ price }</Price>
          <Image src={ thumbnail } alt={ title } />
          <Link
            to={ `/product-detail/${category}/${query}/${id}` }
            data-testid="product-detail-link"
          >
            Detalhes do produto
          </Link>
          <Link
            to={ `/shopping-cart/${category}/${query}/${id}` }
            data-testid="product-add-to-cart"
          >
            Adicionar ao carrinho
          </Link>
        </CardContent>
      </CardContainer>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  category: PropTypes.string,
  query: PropTypes.string,
};

export default Card;
