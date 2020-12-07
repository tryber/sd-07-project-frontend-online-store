import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header';
import Products from '../Products';
import ShoppingCarts from '../ShoppingCarts';
import ProductDetail from '../ProductDetail';

import {
  MainContainer,
  MainWrapper,
} from './styles';

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 0 };
    this.updateQuantity = this.updateQuantity.bind(this);
  }

  async componentDidMount() {
    await this.updateQuantity();
  }

  async updateQuantity() {
    const zero = 0;
    const shopping = JSON.parse(localStorage.getItem('shopping')) || [];
    const quantity = shopping.reduce((acc, curr) => acc + curr.quantity, zero);
    await this.setState({ quantity });
  }

  render() {
    const { quantity } = this.state;
    return (
      <MainContainer>
        <MainWrapper>
          <Header
            quantity={ quantity }
          />
          <Switch>
            <Route
              path="/"
              exact
              render={ () => <Products updateQuantity={ this.updateQuantity } /> }
            />
            <Route
              path="/search/:category/:query"
              render={ (props) => (
                <Products
                  { ...props }
                  updateQuantity={ this.updateQuantity }
                />
              ) }
            />
            <Route path="/shopping" component={ ShoppingCarts } />
            <Route
              path="/product-detail/:id"
              exact
              render={ (props) => (
                <ProductDetail
                  { ...props }
                  updateQuantity={ this.updateQuantity }
                />
              ) }
            />
          </Switch>
        </MainWrapper>
      </MainContainer>
    );
  }
}

export default MainContent;
