import React from 'react';
import { Link } from 'react-router-dom';
import chart from '../icon/chart.png';
import lupa from '../icon/lupa.png';
import '../App.css';
import Categories from '../components/Categories';
import ListCard from '../components/ListCard';

class Main extends React.Component {
  constructor(props) {
    super()
    this.handleValue = this.handleValue.bind(this);
    this.state = {
      search:'',
    }
  }

  handleValue(event) {
    const { value } = event.target;
    this.setState({ search: value });
    console.log(this.state.search);
  }

  render() {
    const { search } = this.state;
    return (
      <section className="main-container">
        <div className="container">
          <img className="lupa" src={ lupa } alt="lupa" />
          <input data-testid="query-input" onChange={this.handleValue} className="searchInput" type="search" />
          <button data-testid="query-button" onClick={this.handleValue} >Buscar</button>
          <h3 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h3>
          <Link to="/shoppingCart" data-testid="shopping-cart-button">
            <img className="chartImg" src={ chart } alt="carrinho-de-compras" />
          </Link>
          <ListCard value={ search } />
        </div>
        <div className="container">
          <Categories />
        </div>
      </section>
    );
  }
}

export default Main;
