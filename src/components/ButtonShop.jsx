import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'; 

class ButtonShop extends React.Component {
    render() {
     return (
        <IconButton color="primary" aria-label="add to shopping cart">
          <Link to="/shoppage">
              <AddShoppingCartIcon data-testid="shopping-cart-button"/>
          </Link>
        </IconButton>
    );
  }
}

export default ButtonShop;
