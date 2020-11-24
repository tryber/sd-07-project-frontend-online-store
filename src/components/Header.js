import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';

export default class Header extends Component {
  render() {
    const { text, imagePath, imagePathReply } = this.props;
    return (
      <header className="header">
        <Link to="/">
          <img
            src={ imagePathReply }
            alt="Carrinho de Compras"
          />
        </Link>
        <img
          src={ imagePath }
          alt="Carrinho de Compras"
        />
        <h2>{ text }</h2>
      </header>
    );
  }
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  imagePathReply: PropTypes.string.isRequired,
};
