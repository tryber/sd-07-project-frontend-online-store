import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';

class Home extends React.Component {
  render() {
    const { history } = this.props;

    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <button
          type="button"
          data-testid="shopping-cart-button"
          onClick={ () => history.push('./cart') }
        >
          Cart
        </button>
        <Sidebar />
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.element.isRequired,
};

export default Home;
