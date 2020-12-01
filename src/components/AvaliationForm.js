import React from 'react';
import PropTypes from 'prop-types';

export default class AvaliationForm extends React.Component {
  constructor(props) {
    super(props);
    this.sumbmit = this.sumbmit.bind(this);
    this.state = {
      name: '',
      rating: 0,
      text: '',
    };
  }

  stateUp(key, value) {
    this.setState({ [key]: value });
  }

  sumbmit() {
    const { form } = this.props;
    form(this.state);
    this.setState({
      name: '',
      rating: 0,
      text: '',
    });
  }

  render() {
    const { name, rating, text } = this.state;
    return (
      <div>
        <h1>Avalie o produto:</h1>
        <label htmlFor="name">
          Nome:
          <input
            id="name"
            type="text"
            value={ name }
            onChange={ (event) => this.stateUp('name', event.target.value) }
          />
        </label>
        <label htmlFor="rating">
          Avaliação:
          <input
            id="rating"
            type="number"
            value={ rating }
            onChange={ (event) => this.stateUp('rating', event.target.value) }
          />
        </label>
        <label htmlFor="comment">
          Deixe um comentário:
          <textarea
            id="comment"
            value={ text }
            onChange={ (event) => this.stateUp('text', event.target.value) }
            data-testid="product-detail-evaluation"
          />
        </label>
        <button type="button" onClick={ this.sumbmit }>Sumbmit</button>
      </div>
    );
  }
}

AvaliationForm.propTypes = {
  form: PropTypes.func.isRequired,
};
