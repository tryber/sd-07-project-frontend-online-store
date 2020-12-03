import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoBackImage from '../images/de-volta.svg';
import './GoBack.css';

class GoBack extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <img className="go-back-image" src={ GoBackImage } alt="Voltar" />
        </Link>
        {/* <button onClick={ action }>voltar</button> */}
      </div>
    );
  }
}

export default GoBack;
