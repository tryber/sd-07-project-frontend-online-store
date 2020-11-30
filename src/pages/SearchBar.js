import React, { Component } from 'react';
import PropTypes from 'prop-types';
import lupa from '../images/lupa.png';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.textImput = this.textImput.bind(this);
    this.inputChange = this.inputChange.bind(this);

    this.state = {
      inputValue: '',
    };
  }

  onClickFunction() {
    const { query } = this.props;
    const { inputValue } = this.state;
    query(inputValue);
  }

  inputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  textImput() {
    // const { query } = this.props;
    // const { inputValue } = this.state;
    return (
      <div>
        <label htmlFor="searchBar" className="searchbar">
          <button
            onClick={ () => this.onClickFunction() }
            type="button"
            data-testid="query-button"
          >
            <img src={ lupa } width="15" height="15" alt="imageButton" />
          </button>
          <input
            type="text"
            data-testid="query-input"
            name="searchBar"
            onChange={ this.inputChange }
            placeholder="Digite aqui..."
          />
        </label>
      </div>
    );
  }

  render() {
    return (
      <form>
        {this.textImput()}
      </form>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = { query: PropTypes.func.isRequired };
