import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.state = {
      query: '',
    };
  }

  onChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { query } = this.state;
    return (
      <div>
        <input
          data-testid="query-input"
          type="search"
          name="query"
          onChange={ (event) => this.onChange(event) }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ onClick }
        >
          BUSCAR
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <button
          data-testid="query-button"
          type="button"
          onClick={ () => { onClick(query); } }
        >
          BUSCAR
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = {  
  onClick: PropTypes.func.isRequired,
};

export default SearchBar;
