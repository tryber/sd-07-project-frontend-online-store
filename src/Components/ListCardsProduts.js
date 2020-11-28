import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App.css';

class ListCardsProduts extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}

  render() {
    const { product, termo } = this.props;
    const { category_id: category, id, title, thumbnail, price } = product;
    const parametros = category + '-' + termo + '-' + id;

    return (
      <div data-testid="product" className="product-card">
        <Link
          className="link-card"
          data-testid="product-detail-link"
          to={ `/product/${parametros}` }
        >
          <h3>
            { title }
          </h3>
          <img src={ thumbnail } alt={ `${title} sprite` } />
        </Link>
        <h4>R$ 
          { price }
        </h4>
        <button className="button-product" type="button" onClick={ this.handleClick }>
          ADICIONAR NO CARRINHO
        </button>
      </div>
    );
  }
}


ListCardsProduts.propTypes = {
  products: PropTypes.objectOf.isRequired,
  category_id: PropTypes.string.isRequired,
  termo: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.img.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ListCardsProduts;
