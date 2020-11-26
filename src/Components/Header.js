import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import ShoppingCartButton from './ShoppingCartButton';

class Header extends React.Component {
  render() {
    const { handlerSubmit, state } = this.props;
    return (
      <div>
        {/* logo */}
        <SearchBar handlerSubmit={ handlerSubmit } state={ state } />
        {/* filtro */}
        <ShoppingCartButton />
      </div>
    );
  }
}

Header.propTypes = {
  state: PropTypes.arrayOf(PropTypes.object).isRequired,
  handlerSubmit: PropTypes.func.isRequired,
};

export default Header;
