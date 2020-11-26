import React from 'react';
import { Link } from 'react-router-dom';
import chart from '../icon/chart.png';
import '../App.css';
import Categories from '../components/Categories';
import ListCard from '../components/ListCard';
import * as api from '../services/api';

class Main extends React.Component {
  constructor(props) {
    super();
    this.handleValue = this.handleValue.bind(this);
    this.handleCatChange = this.handleCatChange.bind(this);
    this.handleApiRequest = this.handleApiRequest.bind(this);
    this.state = {
      search: '',
      catID: '',
      message: 'Digite algum termo de pesquisa ou escolha uma categoria.',
    };
  }
  handleApiRequest(event) {
    const { search, catID } = this.state;
    if (search === '' && catID === '') {
      this.setState({ message: 'Nenhum produto encontrado' });
    }
    console.log(this.state.message);
    console.log(api.getProductsFromCategoryAndQuery(catID, search));
  }
  handleCatChange(event) {
    const selectedID = event.target.id;
    this.setState({ catID: selectedID });
  }

  handleValue(event) {
    const { value } = event.target;
    this.setState({ search: value });
  }

  render() {
    const { search } = this.state;
    return (
      <div className="container">

        <div className="input-1">
          <input data-testid="query-input" onChange={this.handleValue} className="searchInput" type="search"/>
          <h3 data-testid="home-initial-message">{this.state.message}</h3>
        </div>

        <div className="linkToCart-2">
          <Link to="/shoppingCart" data-testid="shopping-cart-button">
            <img className="chartImg" src={chart} alt="carrinho-de-compras" />
          </Link>
          <ListCard value={search} />
        </div>

        <div class="categories-3">
          <Categories handleCatChange={this.handleCatChange} />
        </div>

        <div className="buttonFetch-4">
          <button className="buttonFetch" data-testid="query-button" onClick={this.handlhandleApiRequesteValue}> Buscar </button>
          </div>
      </div>
    );
  }
}

export default Main;
