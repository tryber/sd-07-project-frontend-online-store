import React from 'react';
import LogoImagem from './img/logo.png';

class LogoTipo extends React.Component {
  render() {
    return (
      <div className="logotipo">
        <img src={ LogoImagem } alt="Equipe 5" />
      </div>
    );
  }
}
export default LogoTipo;
