import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class CheckoutPage extends Component {
  constructor(props) {
    super(props);

    this.readCart = this.readCart.bind(this);
  }

  readCart() {
    const objectValues = JSON.parse(localStorage.getItem('items'));
    return objectValues;
  }

  render() {
    return (
      <section ClassName="container-fluid">
        <table className="table table-striped table-bordered">
          <tr>
            <th className="text-center">Imagem</th>
            <th className="text-center">Produto</th>
            <th className="text-center">Preço Unitário</th>
            <th className="text-center">Adquiridos</th>
            <th className="text-center">Total Parcial</th>
          </tr>

          <tr>
            <td>sku</td>
            <td>
              <img
                className="img-responsive img-circle"
                src="image"
                alt="name"
              />
            </td>
            <td>name</td>
            <td>cost</td>
            <td>quantity</td>
            <td>quantitySameItems</td>
          </tr>
        </table>
      </section>
    );
  }
}

export default CheckoutPage;
