import React from 'react';
import SearchBar from './SearchBar';
import ShoppingCartButton from './ShoppingCartButton';

class Header extends React.Component {
  render() {
    return (
      <div>
        {/* logo */}
        <SearchBar />
        {/* filtro */}
        <ShoppingCartButton />
      </div>
    );
  }
}

export default Header;
