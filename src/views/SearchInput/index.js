import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as css from './style';
import * as cpForms from '../../components/forms';
import * as cpIcons from '../../components/Icons';

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
    const { searchInputValue } = this.state;
    callback(searchInputValue);
  }

  render() {
    const { amountCart, itensProducts } = this.props;
    const { searchInputValue } = this.state;
    return (
      <css.ctnCenter>
        <div className="ctn-search-bar">
          <cpForms.Input
            data-testid="query-input"
            name="searchInputValue"
            value={ searchInputValue }
            getEvent={ this.handlerEvent }
            className="input"
          />

          <cpIcons.Search className="icon-search" />
        </div>
        <cpForms.Button getEvent={ this.handlerEventClick } data-testid="query-button">
          Buscar
        </cpForms.Button>
        <Link
          className="ctn-badge"
          data-testid="shopping-cart-button"
          to={ { pathname: '/shopcart', productItens: itensProducts } }
        >
          <div className="badge">{amountCart}</div>
          <cpIcons.Cart />
        </Link>
      </css.ctnCenter>
    );
  }
}

SearchInput.propTypes = {
  callback: PropTypes.func,
  amountCart: PropTypes.number,
  itensProducts: PropTypes.shape({
    id: PropTypes.string,
  }),
};

SearchInput.defaultProps = {
  callback: () => {},
  amountCart: 1,
  itensProducts: {},
};


export default SearchInput;
