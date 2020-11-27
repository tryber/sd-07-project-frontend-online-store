import React, { Component } from 'react';
import * as cp from '../../components';
import * as view from '../../views';
import * as css from './style';

export class Home extends Component {
  render() {
    return (
      <css.CtnCenter>
        <cp.Header />
        <div className='ctn-main'>
          <div className='ctn-sidebar'>
            <view.SideBar />
          </div>

          <div className='ctn-displayCard'>
            <view.SearchInput />
            <div className='displayCard'>
              <cp.CardProduct />
            </div>
          </div>
        </div>
      </css.CtnCenter>
    );
  }
}

export default Home;
