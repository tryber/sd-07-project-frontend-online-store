import React from 'react';
import Header from '../Header';
import GridCards from '../GridCards';
import PropTypes from 'prop-types';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchTerms: '' };
    this.handleSearchTerms = this.handleSearchTerms.bind(this);
  }

  handleSearchTerms({ target }) {
    this.setState({ searchTerms: target.value });
  }

  render() {
    const { searchTerms } = this.state;
    const { selectedCategory } = this.props;
    return (
      <div>
        <Header
          searchTerms={ searchTerms }
          handleSearchTerms={ this.handleSearchTerms }
        />
        <GridCards
          selectedCategory={ selectedCategory }
        />
      </div>
    );
  }
}

Main.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
};

export default Main;
