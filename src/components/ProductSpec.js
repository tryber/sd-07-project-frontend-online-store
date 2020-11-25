import React, { Component } from 'react';
import Proptypes from 'prop-types';


class ProductSpec extends Component {
  render() {
    const { spec } = this.props;
    const { name } = spec;
    return (
      <li>
        { name }
      </li>
    );
  }
}

ProductSpec.propTypes = {
  spec: Proptypes.shape({
    name: Proptypes.string.isRequired,
  }).isRequired,
};

export default ProductSpec;
