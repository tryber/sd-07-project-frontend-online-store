import React from 'react';
import PropTypes from 'prop-types';
import ButtonShop from './ButtonShop';
import { Link } from 'react-router-dom';
import { addToCart } from '../services/cartAPI';


export default class ItemDetail extends React.Component {
  constructor() {
    super();
    this.changeValue = this.changeValue.bind(this);
    this.attributesdetail = this.attributesdetail.bind(this);
    this.state = {
      review: '',
    };
  }

  changeValue(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  attributesdetail() {
    const { location: { state: { attributes } } } = this.props;
    const test = attributes.reduce((acumulator, currentvalue) => {
      return ([
        ...acumulator,
        <li>
          {currentvalue.name} : {currentvalue.value_name}
        </li>
      ])
    }, []);
    return test
  };

  render() {
    const { location: { state: { title } },
    location: { state: { price } },
    location: { state: { thumbnail } } } = this.props;
    const { location: { state } } = this.props;
    const { review } = this.state;
    return (
      <div>
        <div className="home-cart-button-detail">
          <Link to="/">Home</Link>
        <ButtonShop />
        </div>
        <div>
          <div className="detail-tittle">
          <h2>Product Detail</h2>
          <h2 data-testid="product-detail-name">{title} - R$ {price}</h2>
          </div>
          <div className="atrib-img-Container">
            <img src={thumbnail} className="imgDetail"/>
            <div className="atribDetail">
              <h2>Especificações Técnicas</h2>
            <l>{this.attributesdetail()}</l>
            </div>
          </div>
        </div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={() => addToCart(state)}
        >
          Adicionar ao carrinho
        </button>
        <h1>Avaliações</h1>
        <textarea
          data-testid="product-detail-evaluation"
          name="review"
          id="id"
          value={review}
          onChange={this.changeValue}
        />
      </div>
    );
  }
}

ItemDetail.propTypes = {
  id: PropTypes.string,
}.isRequired;
