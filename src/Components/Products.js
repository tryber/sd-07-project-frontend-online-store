import React from 'react';
class Products extends React.Component {
  render() {
    const { results } = this.props.products;
    if (results) {
      return (
        <div>
          {results.map(result => console.log(result))}
        </div>
      )
    }
    return <div />
  }
}

export default Products;
