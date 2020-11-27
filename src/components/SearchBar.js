import PropTypes from 'prop-types';
import React, { Component } from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBar extends Component {
  constructor() {
    super();

    this.getHandle = this.getHandle.bind(this);

    this.state = {
      search: '',
    };
  }

  getHandle({ target }) {
    const { name, value } = target;
    this.setState(() => ({ [name]: value }));
  }

  render() {
    const { search } = this.state;
    const { onClick } = this.props;

    return (
      <div className="searchBar">
        <input name="search" onChange={ this.getHandle } value={ search } />
        <button type="submit" name="search" onClick={ onClick }>
          Buscar
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = { onClick: PropTypes.func.isRequired };

export default SearchBar;
