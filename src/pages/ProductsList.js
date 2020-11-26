import React from 'react';

export default class ProductsList extends React.Component {
  render() {
    const { productList } = this.props;
    return (
      <ul>
        {productList.length
          ? productList.map(({ id, title, thumbnail, price }) => (
            <li
              key={ id }
              data-testid="product"
            >
              <h4>{ title }</h4>
              <img src={ thumbnail } alt="Product" />
              <p>{ price }</p>
            </li>
          )) : (<li> Nenhum produto foi encontrado </li>)}
      </ul>
    );
  }
}

ProductsList.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
