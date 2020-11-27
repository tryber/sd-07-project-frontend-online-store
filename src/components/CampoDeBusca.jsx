import React from 'react';
import PropTypes from 'prop-types';

class CampoDeBusca extends React.Component {
  constructor() {
    super();
    this.changeSearchState = this.changeSearchState.bind(this);
    this.state = {
      search: '',
    };
  }

  changeSearchState({ target }) {
    this.setState({
      search: target.value,
    });
  }
  
  render() {
    const { query, handleInputChange } = this.props;
    const { search } = this.state;

    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          value={ search }
          onChange={ this.changeSearchState }
        />
        <button
          data-testid="query-button"
          type="button"
          value={ query }
          onClick={ () => handleInputChange(search) }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

export default CampoDeBusca;

CampoDeBusca.propTypes = {
  query: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
