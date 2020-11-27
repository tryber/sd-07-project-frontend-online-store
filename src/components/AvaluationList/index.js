import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AvaluationCard from '../../components/AvaluationCard';

import { getAvaluations } from '../../services/avaluationAPI';

class AvaluationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avaluations: [],
    };

    this.fetchAvaluations = this.fetchAvaluations.bind(this);
  }

  componentDidMount() {
    this.fetchAvaluations();
  }

  fetchAvaluations() {
    const { productID: id } = this.props;
    const totalAvaluations = getAvaluations();
    const product = totalAvaluations.find(({ productID }) => productID === id);
    if (product) {
      this.setState({ avaluations: product.avaluations });
    }
  }

  render() {
    const { avaluations } = this.state;
    return(
      <section>
        {avaluations.map((avaluationCard, index) => <AvaluationCard key={index} data={ avaluationCard } />)}
      </section>
    );
  }
}

AvaluationList.propTypes = {
  productID: PropTypes.string.isRequired,
}

export default AvaluationList;
