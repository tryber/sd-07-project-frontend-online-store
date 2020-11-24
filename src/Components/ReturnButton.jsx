import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ReturnButton extends Component {
  render() {
    return(
      <Link to={this.props.path}>
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/709/709624.svg"
          alt="seta curva com um retorno"
        >
        </img>
      </Link>
    )
  }
}

export default ReturnButton;