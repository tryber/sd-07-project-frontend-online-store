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
    const {
      termo,
      product: { id, title, thumbnail, price, category_id: category },
    } = this.props;
    const parametros = `${category}-${termo}-${id}`;

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
          <h4>
            R$
            { price }
          </h4>
        </Link>
        <button className="button-product" type="button" onClick={ this.handleClick }>
          ADICIONAR NO CARRINHO
        </button>
      </div>
    );
  }
}


ListCardsProduts.propTypes = {
  product: PropTypes.objectOf.isRequired,
  termo: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ListCardsProduts;
