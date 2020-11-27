import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AvaluationList from '../AvaluationList';

import { addAvaluation } from '../../services/avaluationAPI';

class AvaluationForm extends Component {
  constructor() {
    super();
    this.state = {
      evaluation: {
        email: '',
        text: '',
        stars: 0,
      },
      send: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { productID } = this.props;
    addAvaluation(this.state.evaluation, productID);
    this.setState({ send: true });
  }

  handleInputChange({ target }) {
    const { name, value } = target;
    this.setState({ evaluation: { [name]: value } });
  }

  render() {
    const { productID } = this.props;
    const { evaluation: { email, text, stars } } = this.state;
    return(
      <section>
        <AvaluationList productID={ productID } />
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="email">
          Email:
            <input
              id="email"
              type="email"
              name="email"
              required={true}
              value={email}
              onChange={ (e) => this.handleInputChange(e) }
            />
          </label>
          <label>
            Mensagem:
            <input
              type="text"
              id="text"
              name="text"
              value={text}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <label>
            Avaliação:
            <input
              type="range"
              min={0}
              max={5}
              step={1}
              value={stars}
              name="stars"
              required={true}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <button type="submit">Avaliar</button>
        </form>
      </section>
    );
  }
}

AvaluationForm.propTypes = {
  productID: PropTypes.string.isRequired,
}

export default AvaluationForm;
