import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import * as lsapi from '../../services/lsapi';
import './EvaluationList.css';

class EvaluationList extends Component {
  render() {
    const { productId } = this.props;
    const ratedProduct = lsapi.getEvaluationList(productId);

    return (
      <div className="formlist-container">
        { ratedProduct.map((rated) => (
          <div key={ rated.email } className="singleAvaliation">
            <span>
              email:
              { rated.email }
            </span>
            <span>
              Nota:
              <ReactStars
                count={ 5 }
                value={ rated.rating }
                edit={ false }
                half={ false }
              />
            </span>
            <span>
              Mensagem:
              { rated.mesage }
            </span>
          </div>
        )) }
      </div>
    );
  }
}

EvaluationList.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default EvaluationList;
