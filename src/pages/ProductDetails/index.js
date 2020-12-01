import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as css from './style';
import * as icon from '../../components/Icons';
import * as cp from '../../components';
import * as view from '../../views';

export class ProductDetails extends Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
    this.state = {
      productDetails: [],
      productsInCart: [],
    };
  }

  async addToCart() {
    const { id, title, price, thumbnail, amount } = this.props.location.detailsProduct;
    const product = { id, title, price, thumbnail, amount };
    await this.setState(prev => ({ productsInCart: [...prev.productsInCart, product] }));
    localStorage.setItem('productsInCard', JSON.stringify(this.state.productsInCart));
  }

  getProductInCartLocalStorage() {
    const objectFromLocation = JSON.parse(localStorage.getItem('productsInCard'));
    this.setState({ productsInCart: objectFromLocation });
  }

  componentDidMount() {
    this.getProductInCartLocalStorage();
  }

  render() {
    const { title, price, thumbnail, amount } = this.props.location.detailsProduct;
    return (
      <css.Ctn>
        <div className="ctn-icons">
          <Link to="/">
            <icon.Back />
          </Link>
          <div className="title">
            <h1 data-testid="product-detail-name">{title}</h1>
          </div>
          <icon.Cart />
        </div>
        <div className="ctn-main">
          <div className="ctn-display">
            <img src={thumbnail} alt="Product" />
            <div className="ctn-inputs">
              <div className="ctn-amount">
                <h4 className="amount">Quantidade</h4>
                <view.AmountControllers
                  className="controller-Amount"
                  amount={amount}
                />
              </div>
              <Link to="/" onClick={this.addToCart} >
                <cp.Button className="button" data-testid="product-detail-add-to-cart" >Adicionar ao carrinho</cp.Button>
              </Link>
            </div>
          </div>
          <div className="ctn-texts">
            <h3 className="subTitle">Especificações Técnicas</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
              quia, possimus accusamus esse nisi illo molestiae earum. Iste rerum
              nesciunt a quia, possimus natus amet adipisci. Molestiae quod quae
              exercitationem. nesciunt a quia, possimus natus amet adipisci.
              Molestiae quod quae exercitationem.
            </p>
            <h4 className="text">{`Preço: R$ ${price}`}</h4>
            <h4 className="text">Quantidade disponível: 104</h4>
          </div>
        </div>
        <div className="ctn-evaluator">
          <div className="ctn-width">
            <div className="subTitle">Avaliações</div>
            <div className="ctn-inputAndStar">
              <cp.Input className="input" />
              <view.RatingStar mode="input" />
            </div>
            <textarea
              className="textArea"
              maxLength="300"
              name="coments"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
      </css.Ctn>
    );
  }
}

export default ProductDetails;
