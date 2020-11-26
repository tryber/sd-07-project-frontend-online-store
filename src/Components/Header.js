import React from 'react';
import SearchBar from './SearchBar';
import ShoppingCartButton from './ShoppingCartButton';

class Header extends React.Component {
  render() {
    const { handlerSubmit, state } = this.props;
    return (
      <div>
        {/* logo */}
        <SearchBar handlerSubmit={handlerSubmit} state={state}/>
        {/* filtro */}
        <ShoppingCartButton />
      </div>
    );
  }
}

export default Header;
