import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as css from './style';
import * as cpIcons from '../../components/Icons';
import * as cpForms from '../../components/forms';
import * as view from '../../views';
import * as util from '../../services/utilities';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.setState = this.setState.bind(this);
    this.amountEventClick = this.amountEventClick.bind(this);

    this.state = {
      currentProductDetail: {
        id: '',
        price: '',
        thumbnail: '',
        title: '',
        amount: 1,
      },
    };
  }

  componentDidMount() {
    util.getFromLocalAndSet('currentProductDetail', this.setState);
  }

  amountEventClick(amount) {
    this.setState((prev) => ({
      currentProductDetail: {
        ...prev.currentProductDetail,
        amount,
      },
    }));
  }


  render() {
    // const { title, price, thumbnail, amount } = this.props.location.detailsProduct;
    const { currentProductDetail } = this.state;
    const { title, price, thumbnail, amount } = currentProductDetail;

    return (
      <css.Ctn>
        <div className="ctn-icons">
          <Link to="/">
            <cpIcons.Back />
          </Link>
          <div className="title">
            <h1 data-testid="product-detail-name">{title}</h1>
          </div>
          <cpIcons.Cart />
        </div>
        <div className="ctn-main">
          <div className="ctn-display">
            <img src={ thumbnail } alt="Product" />
            <div className="ctn-inputs">
              <div className="ctn-amount">
                <h4 className="amount">Quantidade</h4>
                <view.AmountControllers
                  className="controller-Amount"
                  amount={ amount }
                  onClick={ this.amountEventClick }
                />
              </div>
              <Link to="/">
                <cpForms.Button
                  className="button"
                  data-testid="product-detail-add-to-cart"
                  getEvent={ () => util.addObjInLocalStorage(
                    'productsItemsCart',
                    currentProductDetail,
                  ) }
                >
                  Adicionar ao carrinho
                </cpForms.Button>
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
              <cpForms.Input className="input" />
              <view.RatingStar mode="input" />
            </div>
            <textarea
              data-testid="product-detail-evaluation"
              className="textArea"
              maxLength="300"
              name="coments"
              cols="30"
              rows="10"
            />
          </div>
        </div>
      </css.Ctn>
    );
  }
}

export default ProductDetails;
