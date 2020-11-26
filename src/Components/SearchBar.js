import React from 'react';
import PropTypes from 'prop-types';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.teste = this.teste.bind(this);
    this.state = {
      searchText: '',
    };
  }

  teste() {
    const { handlerSubmit } = this.props;
    const { searchText } = this.state;
    handlerSubmit(searchText);
  }

  handleChange({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  render() {
    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.teste }
        >
          Buscar
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  handlerSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
