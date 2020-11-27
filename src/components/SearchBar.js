/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

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
      <div>
        <input
          data-testid="query-input"
          type="text"
          value={ texto }
          onChange={ this.atualizarTexto }
        />
        <input
          data-testid="query-button"
          type="button"
          value="pesquisar"
          onClick={ () => onClick(texto) }
        />
      </div>
    );
  }
}

SearchBar.propTypes = { onClick: PropTypes.func.isRequired };

export default SearchBar;
