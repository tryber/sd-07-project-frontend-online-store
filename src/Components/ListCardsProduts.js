import React from 'react';
import Cart from '../Pages/Cart';
import { Link } from 'react-router-dom';
import '../App.css';

class ListCardsProduts extends React.Component {
  constructor() {
    super();
    this.state = {
      status: '',
      shouldRedirect: false,
      products: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}

  render() {
    const { product, termo } = this.props;
    const { category_id, id, title, thumbnail, price } = product;
    const parametros = category_id + '-' + termo + '-' + id;

    return (
      <div data-testid="product" className="product-card">
        <Link
          className="link-card"
          data-testid="product-detail-link"
          to={`/product/${parametros}`}
        >
          <h3>{title}</h3>
          <img src={thumbnail} alt={`${title} sprite`} />
        </Link>
        <h4>R$ {price}</h4>
        <button className="button-product" onClick={this.handleClick}>
          ADICIONAR NO CARRINHO
        </button>
      </div>
    );
  }
}

export default ListCardsProduts;
