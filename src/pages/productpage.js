import React from 'react';
import PropTypes from 'prop-types';

class ProductPage extends React.Component {
  render() {
    const { title } = this.props.location.state;
    return(
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
      </div>
    );
  }
}

ProductPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ProductPage;
