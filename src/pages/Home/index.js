import React, { Component } from 'react';
import * as cp from '../../components';
import * as view from '../../views';
import * as css from './style';

export class Home extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  render() {
    return (
      <css.CtnCenter>
        <cp.Header />
        <div className="ctn-main">
          <div className="ctn-sidebar">
            <view.SideBar />
          </div>

          <div className="ctn-displayCard">
            <view.SearchInput />
            <div className="displayCard">
              <p data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
            </div>
          </div>
        </div>
      </css.CtnCenter>
    );
  }
}

export default Home;
