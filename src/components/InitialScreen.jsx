import React from 'react';
import { SideBar } from './index';
import './InitialScreen.css';

import * as api from '../services/api';

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
    const { message, categories } = this.state;
    return (
      <div className="container">
        <div className="side-bar">
          <SideBar categories={ categories } />
        </div>
        <div className="container-initial-screen">
          <input type="text" />
          <h1 data-testid="home-initial-message">{message}</h1>
        </div>
      </div>
    );
  }
}

export default InitialScreen;
