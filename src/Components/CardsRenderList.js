import React from 'react';
import ListCardsProduts from '../Components/ListCardsProduts';
import '../Pages/Home.css';

class CardsRenderList extends React.Component {
  render() {
      const { products, termo } = this.props;
    return (
        <div className="center">
            {products.map((product) => (
              <ListCardsProduts
                key={product.id}
                product={product}
                termo={termo}
              />
            ))}
          </div>
    );
  }
}

export default CardsRenderList;
