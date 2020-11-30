import React from 'react';
import PropTypes from 'prop-types';

export default class ItemDetail extends React.Component {
  render() {
    const { location: { state: { title } } } = this.props;
    return (
      <div>
        <h1>Product Detail</h1>
        <div data-testid="product-detail-name">
          {title}
        </div>
      </div>
    );
  }
}

ItemDetail.propTypes = {
  id: PropTypes.string,
}.isRequired;
