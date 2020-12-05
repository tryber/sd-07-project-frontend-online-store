import React from 'react';
import EmptyShoppingCart from '../components/EmptyShoppingCart';
import ShoppingCartList from '../components/ShoppingCartList';

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      objeto: [],
      isEmpty: true,
    };
    this.recuperaLocalStorage = this.recuperaLocalStorage.bind(this);
    this.arrayEmpty = this.arrayEmpty.bind(this);
  }

  componentDidMount() {
    const local = JSON.parse(localStorage.getItem('items'));
    if (local === null) {
      this.arrayEmpty();
    } else {
      this.recuperaLocalStorage();
    }
  }

  arrayEmpty() {
    this.setState({ objeto: [] });
  }

  recuperaLocalStorage() {
    const objeto = JSON.parse(localStorage.getItem('items'));
    this.setState({ objeto, isEmpty: false });
  }

  render() {
    const { objeto, isEmpty } = this.state;
    return (
      <div>
        <header className="header-bar-content">
          <h1>ShoppingCart</h1>
        </header>
        <div>
          {isEmpty ? <EmptyShoppingCart /> : <ShoppingCartList objeto={ objeto } />}
        </div>
      </div>
    );
  }
}
