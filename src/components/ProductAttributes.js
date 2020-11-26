import React from 'react';

import PropTypes from 'prop-types';

class ProductAttributes extends React.Component {
  render() {
    const { attribute } = this.props;
    return (
      <div>
        <div>
          {attribute.name}
        </div>
        <div>
          {attribute.value_name}
        </div>
      </div>
    );
  }
}

ProductAttributes.propTypes = {
  attribute: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value_name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductAttributes;
