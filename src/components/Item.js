import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

export default class Item extends React.Component {
  render() {
    const { id, title, thumbnail, price } = this.props;
    return (
      <div className="items" data-testid="product" key={ id }>
        <h4>{ title }</h4>
        <img className="item-image" src={ thumbnail } alt="imagem do produto" />
        <div className="item-price">
          { `R$ ${price}` }
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
