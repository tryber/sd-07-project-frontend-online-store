import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ReturnButton.css';


class ReturnButton extends Component {
  render() {
    const { path } = this.props;
    return (
      <Link to={ path }>
        <img
          className="return-button-icon"
          src="https://www.flaticon.com/svg/static/icons/svg/709/709624.svg"
          alt="seta curva com um retorno"
        />
      </Link>
    );
  }
}

export default ReturnButton;
