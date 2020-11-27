import React from 'react';

class ItemCard extends React.Component {
  render() {
    const { title, image, price } = this.props;
    return (
      <div className="card-product">
        <span data-testi="product" className="card-title">{title}</span>
        <img data-testi="product" src={image} alt="foto-produto" className="card-image" />
        <span data-testi="product" className="card-price">$ {price}</span>
      </div>
    );
  }
}

export default ItemCard;
