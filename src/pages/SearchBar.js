import React, { Component } from 'react';
import lupa from '../images/lupa.png';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.textImput = this.textImput.bind(this);
    this.state = {
      inputValue: '',
    };
  }

  inputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  textImput() {
    return (
      <label htmlFor="searchBar">
        <button onClick={() => this.props.query(this.state.inputValue) } type="button">
          <img src={lupa} width="15" height="15" alt="imageButton" />
        </button>
        <input
          type="text"
          data-testid="query-input"
          name="searchBar"
          onChange={ this.inputChange }
        />
      </label >
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

export default SearchBar