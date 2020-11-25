import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.fetchDetails = this.fetchDetails.bind(this);
    this.state = {
      dataDetail: [],
    };
  }

  componentDidMount() {
    this.fetchDetails();
  }

  async fetchDetails() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const getDetail = await api.getSpecsFromProduct(id);
    this.setState({
      dataDetail: getDetail,
    });
  }

  render() {
    const { dataDetail } = this.state;
    let renderDetails = '';
    if (dataDetail !== [] || dataDetail) {
      renderDetails = (
        <div>
          <h3 data-testid="product-detail-name">{`${dataDetail.title} - R$ ${dataDetail.price}`}</h3>
          <img src={dataDetail.thumbnail} alt="Imagem do produto" />
          <div>
            <ul>
              <li>Especificação 01</li>
              <li>Especificação 02</li>
              <li>Especificação 03</li>
              <li>Especificação 04</li>
              <li>Especificação 05</li>
              <li>Especificação 06</li>
              <li>Especificação 07</li>
            </ul>
          </div>
        </div>
      );
    }

    return <div>{renderDetails !== '' ? renderDetails : 'Loading'}</div>;
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
export default ProductDetail;
