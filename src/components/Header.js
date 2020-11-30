import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/Header.css';

export default class Header extends Component {
  render() {
    const { text, imagePathReply } = this.props;
    return (
      <header className="header">
        <Link to="/">
          <img
            src={ imagePathReply }
            alt="Carrinho de Compras"
          />
        </Link>

        <h2>{ text }</h2>
      </header>
    );
  }
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
  imagePathReply: PropTypes.string.isRequired,
};
