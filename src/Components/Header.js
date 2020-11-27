import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import SearchBar from './SearchBar';
import ShoppingCartButton from './ShoppingCartButton';

class Header extends React.Component {
  render() {
    const { handlerSearch, state } = this.props;
    return (
      <div className="header">
        <Logo />
        <div className="header-content">
          <SearchBar handlerSearch={ handlerSearch } state={ state } />
          {/* filtro */}
          <ShoppingCartButton />
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  state: PropTypes.arrayOf(PropTypes.object).isRequired,
  handlerSearch: PropTypes.func.isRequired,
};

export default Header;
