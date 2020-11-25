import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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

ReturnButton.propTypes = {
  path: PropTypes.string.isRequired,
};

export default ReturnButton;
