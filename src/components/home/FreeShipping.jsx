import React from 'react';

class FreeShipping extends React.Component {

  freeShipping() {
    const { shipping } = this.props;
    if (shipping) {
      return (
        <p data-testid="free-shipping">Free Shipping!</p>
      );
    }
    return ("");
  }

  render() {
    return (
      <div>
        {this.freeShipping()}
      </div>
    );
  }
}

export default FreeShipping;
