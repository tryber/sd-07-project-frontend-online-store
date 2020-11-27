import React from 'react';
import PropTypes from 'prop-types';

class FreeShipping extends React.Component {
  freeShipping() {
    const { shipping } = this.props;
    if (shipping) {
      return (
        <p data-testid="free-shipping">Free Shipping!</p>
      );
    }
    return ('');
  }

  render() {
    return (
      <div>
        {this.freeShipping()}
      </div>
    );
  }
}

FreeShipping.propTypes = {
  shipping: PropTypes.bool.isRequired,
};

export default FreeShipping;
