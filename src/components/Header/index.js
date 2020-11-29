import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  ButtonSubmit,
  Form,
  HeaderContainer,
  HeaderContent, InputText,
  ShoppingCartIcon,
} from './styles';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { worldSearch: '' };
    this.handlerWorlds = this.handlerWorlds.bind(this);
  }

  handlerWorlds({ target }) {
    const { value } = target;
    this.setState({ worldSearch: value });
  }

  render() {
    const { handleWorldSearch } = this.props;
    const { worldSearch } = this.state;

    return (
      <HeaderContainer>
        <HeaderContent>
          <Form>
            <InputText
              data-testid="query-input"
              value={ worldSearch }
              onChange={ this.handlerWorlds }
            />
            <button
              data-testid="query-button"
              onClick={ handleWorldSearch }
              value={ worldSearch }
            >
              Buscar
            </button>
          </Form>
          <Link to="/shopping-cart" data-testid="shopping-cart-button">
            <ShoppingCartIcon />
          </Link>
        </HeaderContent>
      </HeaderContainer>
    );
  }
}

Header.propTypes = {
  handleWorldSearch: PropTypes.func.isRequired,
};

export default Header;
