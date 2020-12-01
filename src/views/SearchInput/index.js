import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as css from './style';
import * as cp from '../../components';
import * as icon from '../../components/Icons';

class SearchInput extends Component {
  constructor() {
    super();

    this.handlerEvent = this.handlerEvent.bind(this);
    this.handlerEventClick = this.handlerEventClick.bind(this);

    this.state = {
      searchInputValue: '',
    };
  }

  handlerEvent({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handlerEventClick() {
    const { callback } = this.props;
    callback(this.state.searchInputValue);
  }

  render() {
    const { amountCart, itensProducts } = this.props;
    return (
      <css.ctnCenter>
        <div className="ctn-search-bar">
          <cp.Input
            data-testid="query-input"
            name="searchInputValue"
            value={this.state.searchInputValue}
            getEvent={this.handlerEvent}
            className="input"
          />

          <icon.Search className="icon-search" />
        </div>
        <cp.Button getEvent={this.handlerEventClick} data-testid="query-button">
          Buscar
        </cp.Button>
        <Link
          className="ctn-badge"
          data-testid="shopping-cart-button"
          to={{ pathname: '/shopcart', productItens: itensProducts }}
        >
          <div className="badge">{amountCart}</div>
          <icon.Cart />
        </Link>
      </css.ctnCenter>
    );
  }
}

export default SearchInput;
