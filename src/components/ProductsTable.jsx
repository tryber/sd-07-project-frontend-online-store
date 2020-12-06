import React from 'react';
import Card from './Card';

class ProductsTable extends React.Component{
    constructor(props) {
      super(props);

    this.productsCounter = this.productsCounter.bind(this);
      this.state = {
        arrayOfItemByInputedText: [],
        counter: 0,
      };
    }




  productsCounter() {
    // Requisito 13 não funciona
    // Se alterar para o commit anterior, o Eslint reclama que a mudança de estado deve ser feita com callback
    // const prod = JSON.parse(localStorage.getItem('cartItems'));
    // const zero = 0;
    // const nSt = prod != null ? prod.reduce((acc, cur) => acc + cur.quantity, zero) : zero;
    // this.setState(this.updateCounter(this.state, true, nSt));
    this.setState((estadoAnterior) => ({ counter: estadoAnterior.counter + 1 }));
  }

    render() {

    const { arrayOfItemByInputedText, counter } = this.state;
        return(
            <section className="product-list">
            {arrayOfItemByInputedText
              .map((item) => (<Card
                key={ item.id }
                products={ item }
                onAdd={ this.productsCounter }
                counter={ counter }
              />))}
          </section>
        );
    }
}

export default ProductsTable;
