import React, { Component } from 'react';

class SearchBar extends Component {
  constructor () {
    super();
    this.onChange = this.onChange.bind(this);
    this.state = {
      query: '',
    }
  }

  onChange({target:{ name, value, }}) {
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div>
        <input
          data-testid="query-input"
          type="search"
          name="query"
          onChange={ (event) => this.onChange(event) }
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <button
          data-testid="query-button"
          type="button"
          onClick={ () => { this.props.onClick(this.state.query)} }
        >
          BUSCAR
        </button>
      </div>
    );
  }
}

export default SearchBar;
