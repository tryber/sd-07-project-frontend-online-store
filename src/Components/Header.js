import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="container-header">
        <div className="logo">
          <h1>Shopping</h1>
        </div>
        <div className="input-serch">
          <input type="text" placeholder="Buscar" className="input" />
        </div>
      </div>
    );
  }
}

export default Header;
