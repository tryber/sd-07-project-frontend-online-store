import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import goBackArrow from '../img/back-arrow.png';

export default class Product extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">
            <img src={ goBackArrow } className="go-back-arrow-icon" alt="goBackArrow"/>
          </Link>
        </div>
      </div>
    );
  }
}
