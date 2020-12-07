import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  CartIcon,
  HeaderContainer,
  HeaderContent,
  SearchInput,
  SearchLabel,
} from './styles';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
    this.changeQuery = this.changeQuery.bind(this);
  }

  changeQuery({ target }) {
    const { value } = target;
    this.setState({ query: value });
  }

  render() {
    const { quantity } = this.props;
    const { query } = this.state;
    return (
      <HeaderContainer>
        <HeaderContent>
          <SearchLabel>
            <SearchInput
              type="text"
              data-testid="query-input"
              value={ query }
              onChange={ this.changeQuery }
            />
            <Link
              to={ `/search/0/${query || '0'}` }
              data-testid="query-button"
            >
              buscar
            </Link>
          </SearchLabel>

          <Link
            to="/shopping"
            data-testid="shopping-cart-button"
          >
            <span data-testid="shopping-cart-size">{ quantity }</span>
            <CartIcon />
          </Link>
        </HeaderContent>
      </HeaderContainer>
    );
  }
}

Header.propTypes = {
  quantity: PropTypes.number.isRequired,
};

export default Header;
