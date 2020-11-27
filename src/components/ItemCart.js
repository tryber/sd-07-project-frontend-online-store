import React from 'react';


export default class ItemCart extends React.Component {
  render() {
      const  {id, title, thumbnail, price} = this.props
    return (
      <div className="items" data-testid="product" key={id}>
        <h4>{title}</h4>
        <img className="item-image" src={thumbnail}/>
        <div className="item-price">R$ {price}</div>
      </div>
    )
  }
}