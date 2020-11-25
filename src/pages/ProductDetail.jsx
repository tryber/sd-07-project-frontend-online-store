import React from 'react';
import * as API from '../services/api';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.searchQueryProducts = this.searchQueryProducts.bind(this);

    this.state = {
      attributes: [],
      title: '',
      price: 0,
      thumbnail: '',
    };
  }

  async searchQueryProducts() {
    const ListProducts = await API.getProductById(this.props.match.params.id);
    const { attributes, title, thumbnail, price } = ListProducts;
    return this.setState({ attributes, title, thumbnail, price });
  }

  componentDidMount() {
    this.searchQueryProducts();
  }

  render() {
    const { title, price, thumbnail } = this.state;
    return (
      <div>
        <h3 className='product-detail-name'>{title}</h3>
        <div>{price}</div>
        <img src={thumbnail} alt={title} />
        <div>
          Especificações Técnicas
          <ul>
            {this.state.attributes.map((element) => {
              return (
                <li>
                  {`${element.name} --- ${element.value_name}`};
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
