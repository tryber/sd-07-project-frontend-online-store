import React from 'react';
import * as API from "../services/api";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.searchQueryProducts = this.searchQueryProducts.bind(this);

    this.state = {

    };
  }

  async searchQueryProducts() {
    const ListProducts = await API.getProductById(this.props.match.params.id);
    console.log(ListProducts);
    // if (ListProducts === "") return <span>Nenhum produto foi encontrado</span>;
    // const { results } = ListProducts;
    // return (this.setState({ products: results }));
  }

  componentDidMount() {
    this.searchQueryProducts();
  }

  

  render() {
    console.log(this.props);
    const { title, price, thumbnail } = this.props;
    return (
      <div>
        <h3 className="product-detail-name">{title}</h3>
        <div>{price}</div>
        <img src={thumbnail} alt={title} />
        <div>Especificações Técnicas</div>
      </div>
    );
  }
}

export default ProductDetail;