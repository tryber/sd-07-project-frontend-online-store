import React from 'react';
import '../Pages/Home.css';

class ProductNotFound extends React.Component {
  render() {
    return (
      <div className="header-initial-message">
        <img
          className="null"
          src="https://images.emojiterra.com/google/android-10/512px/26a0.png"
          alt="Erro"
        />
        <h3 className="paragraph">Nenhum produto foi encontrado</h3>
      </div>
    );
  }
}

export default ProductNotFound;
