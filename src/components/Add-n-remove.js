import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddAndRemoveItem extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem() {
    const { quantity } = this.state;
    this.setState({ quantity: quantity + 1 });
  }

  removeItem() {
    const { quantity } = this.state;
    this.setState({ quantity: quantity - 1 });
  }

  render() {
    const { key, price, image, title, id } = this.props;
    const { quantity } = this.state;
    return (
      <div key={ key } data-testid="product">
        <div className="main-category-result-content" id={ id }>
          <h4>{ title }</h4>
          <img src={ image } alt="titulo" />
          <p>{ price }</p>
          <button
            type="button"
            onClick={ this.addItem }
          >
            {' '}
            +
            {' '}
          </button>
          <div>{quantity}</div>
          <button
            type="button"
            onClick={ this.removeItem }
          >
            {' '}
            -
            {' '}
          </button>
        </div>        
      </div>
    );
  }
}

AddAndRemoveItem.propTypes = {
  key: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default AddAndRemoveItem;
