import React, { Component } from 'react';
import * as css from './style';
import * as icon from '../../components/Icons';
import * as view from '../../views';

export class ItemProduct extends Component {

  render() {
    const { id, title, price, amount, thumbnail } = this.props.product;
    return(
      <css.Ctn key={id} >
        <icon.Close />
        <img src={thumbnail}/>
        <h4 className='ctn-title'>{title}</h4>
        <view.AmountControllers amount={amount} />
        <p>{price}</p>
      </css.Ctn>
    );
  }
}

export default ItemProduct;
