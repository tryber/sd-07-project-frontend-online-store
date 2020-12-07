/* eslint-disable no-unused-expressions */
import React from 'react';

class Carrinho extends React.Component {
  constructor(props) {
    super(props);
    this.saveState = this.saveState.bind(this);
    this.state = {
      empty: true,
      objeto: [],
    };
  }

  componentDidMount() {
    this.saveState();
  }

  async saveState() {
    const saveObj = await JSON.parse(localStorage.getItem('cart'));
    this.setState({
      objeto: saveObj,
    });
    const { objeto } = this.state;
    if (objeto === null) {
      this.setState({ empty: true });
    } else {
      this.setState({ empty: false });
    }
  }

  render() {
    const { empty, objeto } = this.state;
    return empty === true ? (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    ) : (
      <div>
        {objeto.map((item) => (
          <div key={ item.id }>
            <h2 data-testid="shopping-cart-product-name">{item.title}</h2>
            <h3 data-testid="shopping-cart-product-quantity">{item.quantity}</h3>
            <p>{item.price}</p>
            <img src={ item.thumbnail } alt="imagem do produto" />
          </div>))}
      </div>
    );
  }
}

export default Carrinho;
