import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import 'rbx/index.css';
import { Button, Control, Icon, Input } from 'rbx';
import { faCartPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Categories from '../components/Categories';
import ListCard from '../components/ListCard';
import * as api from '../services/api';
import Loading from '../components/Loading';

class Main extends React.Component {
  constructor() {
    super();
    this.handleValue = this.handleValue.bind(this);
    this.handleCatChange = this.handleCatChange.bind(this);
    this.handleApiRequest = this.handleApiRequest.bind(this);
    this.cartUpdate = this.cartUpdate.bind(this);
    this.state = {
      search: '',
      catID: '',
      message: 'Digite algum termo de pesquisa ou escolha uma categoria.',
      product: [],
      loading: false,
      cartCount: JSON.parse(localStorage.getItem('cart')),
    };
  }

  componentDidMount() {
    this.cartUpdate();
  }

  cartUpdate() {
    this.setState({
      cartCount: JSON.parse(localStorage.getItem('cart')),
    });
  }

  async handleCatChange(event) {
    const selectedID = await event.target.id;
    this.setState(
      {
        catID: selectedID,
      },
      async () => {
        await this.handleApiRequest();
      },
    );
  }

  handleValue(event) {
    const { value } = event.target;
    this.setState({ search: value });
  }

  async handleApiRequest() {
    this.setState({ loading: true });
    const { catID, search } = this.state;
    this.setState({
      catID: '',
      loading: false,
      message:
        search !== '' || catID !== '' ? '' : 'Nenhum produto foi encontrado',
      product: await api.getProductsFromCategoryAndQuery(catID, search),
    });
  }

  render() {
    const count = 0;
    const { search, catID, product, message, loading, cartCount } = this.state;
    let array = [];
    if (product.length < 1) {
      array = [];
    } else {
      array = product.results;
    }
    return (
      <div className="flex-container">
        <div className="box">
          <div className="flex-container sub-container">
            <div className="box sub-box-1">
              <Control iconLeft iconRight>
                <Input
                  color="dark"
                  rounded
                  data-testid="query-input"
                  onChange={ this.handleValue }
                  className="searchInput"
                  type="search"
                />
                <Icon align="left">
                  <FontAwesomeIcon icon={ faSearch } />
                </Icon>
              </Control>
              <div className="message">
                <h3 data-testid="home-initial-message">{message}</h3>
              </div>
            </div>

            <div className="box sub-box">
              <Button
                rounded
                outlined
                color="black"
                key="white"
                className="buttonFetch"
                data-testid="query-button"
                onClick={ this.handleApiRequest }
              >
                Buscar
              </Button>
            </div>

            <div className="box sub-box">
              <Link to="/shoppingCart" data-testid="shopping-cart-button">
                <Icon size="large">
                  <FontAwesomeIcon icon={ faCartPlus } size="2x" />
                </Icon>
              </Link>
              <span data-testid="shopping-cart-size" className="cart-details">
                {cartCount === null ? count : cartCount.length}
              </span>
            </div>
          </div>
        </div>
        <div className="first">
          <div className="flex-container second">
            <div className="box-radio">
              <Categories handleCatChange={ this.handleCatChange } />
            </div>

            <div className="box-item">
              {loading ? <Loading /> : ''}
              <ListCard search={ search } category={ catID } product={ array } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
