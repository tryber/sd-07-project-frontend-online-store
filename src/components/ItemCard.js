import React from 'react';

class ItemCard extends React.Component {
  render() {
    const { titulo, foto, preco } = this.props;
    return (
      <div>
        <div>{titulo}</div>
        <img src={foto} alt="foto-produto" />
        <div>{preco}</div>
      </div>
    );
  }
}

export default ItemCard;
