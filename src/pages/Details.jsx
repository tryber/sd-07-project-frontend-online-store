import React from 'react';

class Details extends React.Component {
  
  render() {
    const { location: { state: { title } } } = this.props;

    return (
      <div>
        <h2 data-testid="product-detail-name">{title}</h2>
      </div>
    );
  }
}

export default Details;
