import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import Productlist from './Productlist'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.searchByTerm = this.searchByTerm.bind(this);
    this.changeByTerm = this.changeByTerm.bind(this);
    this.state = {
      inputValue: '',
      onChangeValue: '',
    }
  }

  searchByTerm() {
    const { onChangeValue } = this.state;

    this.setState({
      inputValue: onChangeValue,
    })
  }

  changeByTerm({ target }) {
    const { value } = target
    this.setState({ onChangeValue: value });
  }

  render() {
    const { history } = this.props;

    return (
      <div>
        <input
          type="text"
          data-testid="query-input"
          name="searchTerm"
          id="searchTerm"
          placeholder="exemplo"
          onChange={this.changeByTerm}
        />
        <button type="button" data-testid="query-button" onClick={this.searchByTerm}>Adicionar</button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Productlist term={this.state.inputValue} />
        <button
          type="button"
          data-testid="shopping-cart-button"
          onClick={() => history.push('./cart')}
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
