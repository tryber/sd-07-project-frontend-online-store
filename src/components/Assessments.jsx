import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stars from './Stars';

class Evalue extends Component {
  render() {
    const { storage } = this.props;
    return storage.map(
      ({ note, email, assessment }, index) => (
        <div key={ `key-${index + 1}` }>
          <h4>{email}</h4>
          <Stars note={ +note } />
          <p>{assessment}</p>
        </div>
      ),
    );
  }
}

Evalue.propTypes = {
  storage: PropTypes.arrayOf(PropTypes.shape({
    email: PropTypes.string.isRequired,
    assessment: PropTypes.string.isRequired,
    note: PropTypes.number.isRequired,
  })).isRequired,
};
export default Evalue;
