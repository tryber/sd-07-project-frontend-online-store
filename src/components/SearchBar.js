/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import lupa from './img/glass.png';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.atualizarTexto = this.atualizarTexto.bind(this);
    this.state = {
      texto: '',
    };
  }

  atualizarTexto(event) {
    this.setState({
      texto: event.target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { texto } = this.state;
    return (
      <div className="barrapesquisa">
        <input
          className="textopesquisa"
          data-testid="query-input"
          placeholder="Pesquisa"
          type="text"
          value={ texto }
          onChange={ this.atualizarTexto }
        />
        <button
          className="iconpesquisa"
          data-testid="query-button"
          type="button"
          value="pesquisar"
          onClick={ () => onClick(texto) }
        >
          <img src={ lupa } alt="pequisar" />
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = { onClick: PropTypes.func.isRequired };

export default SearchBar;
