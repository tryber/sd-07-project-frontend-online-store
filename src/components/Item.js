import React from 'react';
import '../App.css';

export default class Item extends React.Component {
  render() {
    return (
      <div className="items" data-testid="product" key={this.props.id}>
        <h4>{this.props.title}</h4>
        <img className="item-image" src={this.props.thumbnail}/>
        <div className="item-price">R$ {this.props.price}</div>
      </div>
    )
  }
}