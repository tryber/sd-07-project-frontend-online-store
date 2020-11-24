import React from 'react';
import { Link } from 'react-router-dom';

import { SideBar } from './index';
import './InitialScreen.css';
import KartImg from '../img/kart.svg'

import * as api from '../services/api';
import Kart from './Kart'

class InitialScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      message: 'Digite algum termo de pesquisa ou escolha uma categoria.',
    };
  }

  async componentDidMount() {
    await this.fetchAPI();
  }

  async fetchAPI() {
    const { getCategories } = api;

    this.setState({
      categories: await getCategories(),
    });
  }

  render() {
    const { message } = this.state;
    return (
      <div className="container">
        <div className="side-bar">
          <SideBar />
        </div>
        <div className="container-initial-screen">
          <input type="text" />
          <Link data-testid="shopping-cart-button" to={'/kart'}><img src={KartImg} /></Link>
          <h1 data-testid="home-initial-message">{message}</h1>
        </div>
      </div>
    );
  }
}

export default InitialScreen;
