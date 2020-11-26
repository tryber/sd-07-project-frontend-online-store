import React from 'react';


class ProductList extends React.Component {

  render() {
    const { products } = this.props;
    return(
      <div>
        {products.map(({id, title, thumbnail, price}) => (
          <div className="card" key={id} data-testid="product">
            <h4> {title} </h4>
            <img src={thumbnail} alt={title} />
            <p> {price} </p>
          </div>
          ))
        }
      </div>
    )
  }
}



export default ProductList;