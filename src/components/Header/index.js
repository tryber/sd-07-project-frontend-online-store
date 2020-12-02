import React, { Component } from 'react';
import * as css from './style';

class Header extends Component {
  render() {
    return (
      <css.Header>
        <div className="ctn-center">
          <h1>Projeto Front-End Online Store</h1>
          <h4>Em grupo, Turma 7</h4>
        </div>
      </css.Header>
    );
  }
}

export default Header;
