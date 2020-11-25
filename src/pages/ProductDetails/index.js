import React, { Component } from 'react';
import { getProductFromId } from '../../services/api';
import CartButton from '../../components/CartButton';

class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
        title: '',
        price: 0,
        thumbnail: '',
        available_quantity: 0,
    }
  this.handleState = this.handleState.bind(this);
  }
  
  async componentDidMount() {
    const { id } = this.props.match.params;
    getProductFromId(id).then(result => this.handleState(result));
  }

  handleState({ title, price, thumbnail, available_quantity }) {
    this.setState({
      title,
      price,
      thumbnail,
      available_quantity,
    });
  }

  render() {
    const { title, price, thumbnail, available_quantity } = this.state;

    return(
      <article>
        <header>
          <h2 data-testid="product-detail-name">{title}</h2>
          <aside>
            <img alt="product thumbnail" src={ thumbnail } />
          </aside>
          <main>
            <div>
              {available_quantity}
            </div>
          </main>
        </header>
          <div>{`R$ ${price}`}</div>
        
        <CartButton />
      </article>
    );
  }
}

export default ProductDetails;
