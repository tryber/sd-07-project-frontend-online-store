import React from 'react';
import PropTypes from 'prop-types';

class ProductPage extends React.Component {
  render() {
    const { location } = this.props;
    const { state } = location;
    const { title } = state;
    return (
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
      </div>
    );
  }
}

ProductPage.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  state: PropTypes.objectOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductPage;
