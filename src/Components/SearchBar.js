import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.teste = this.teste.bind(this);
    this.state = {
      searchText: '',
    }
  }

  teste(){
    const { handlerSubmit } = this.props;
    const { searchText } = this.state;
    handlerSubmit(searchText)
  }

  handleChange({ target }) {
    this.setState({
      searchText: target.value,
    })
  }
  render() {
    //const { handlerSubmit } = this.props;
    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          onChange={this.handleChange}
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <button data-testid="query-button" onClick={this.teste}>Buscar</button>
      </div>
    );
  }
}

export default SearchBar;
