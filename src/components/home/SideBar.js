import React from 'react';
import PropTypes from 'prop-types';
import sidebar from '../../images/side-bar.png';
import './SideBar.css';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };

    this.changeByTerm = this.changeByTerm.bind(this);
    this.searchByTerm = this.searchByTerm.bind(this);
  }

  changeByTerm(event) {
    const input = event.target;
    this.setState({ query: input.value });
  }

  searchByTerm() {
    const { onClick } = this.props;
    const { query } = this.state;
    onClick(query);
  }

  render() {
    const { query } = this.state;
    return (
      <div>
        <input
          type="text"
          data-testid="query-input"
          className="sideBar"
          id="sideBar"
          value={ query }
          onChange={ this.changeByTerm }
        />
        <button type="button" onClick={ this.searchByTerm } data-testid="query-button">
          <img src={ sidebar } className="icon" alt="Icon" />
        </button>
      </div>
    );
  }
}

SideBar.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SideBar;
