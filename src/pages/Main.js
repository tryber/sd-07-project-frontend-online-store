import React from 'react';
import { Link } from 'react-router-dom';
import chart from '../icon/chart.png';
import lupa from '../icon/lupa.png';
import '../App.css';
import Categories from '../components/Categories';
import ListCard from '../components/ListCard';
import * as api from '../services/api';

class Main extends React.Component {
  constructor(props) {
    super()
    this.handleValue = this.handleValue.bind(this);
    this.handleCatChange = this.handleCatChange.bind(this);
    this.handleApiRequest = this.handleApiRequest.bind(this);
    this.state = {
      search:'',
      catID:'',
      message:'Digite algum termo de pesquisa ou escolha uma categoria.',
    }
  }
  handleApiRequest(event) {

    const { search, catID } = this.state;
    if(search === '' && catID === '') {
      this.setState({ message: 'Nenhum produto encontrado' });
    }
    console.log(this.state.message)
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
      <section className="main-container">
        <div className="container">
          <img className="lupa" src={ lupa } alt="lupa" />
          <input data-testid="query-input" onChange={this.handleValue} className="searchInput" type="search" />
          <button data-testid="query-button" onClick={this.handlhandleApiRequesteValue} >Buscar</button>
          <h3 data-testid="home-initial-message">
            {this.state.message}
          </h3>
          <Link to="/shoppingCart" data-testid="shopping-cart-button" >
            <img className="chartImg" src={ chart } alt="carrinho-de-compras" />
          </Link>
          <ListCard value={ search } />
        </div>
        <div className="container">
          <Categories handleCatChange={this.handleCatChange}/>
        </div>
      </section>
    );
  }
}

export default Main;
