import React, { Component } from 'react';
import PropTypes from 'prop-types';
import starOff from '../images/star.svg';
import starOn from '../images/starSet.svg';
import Stars from './Stars';
import './Evalue.css';

class Evalue extends Component {
  constructor() {
    super();
    this.handleDate = this.handleDate.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      note: 0,
      email: '',
      assessment: '',
    };
  }

  onClick(element) {
    const { firstChild: { src, id }, parentNode: { childNodes } } = element;
    this.setState({ note: +id });
    return src.includes(starOff)
      ? childNodes.forEach(({ firstChild: e }) => { if (e.id <= id) e.src = starOn; })
      : childNodes.forEach(({ firstChild: e }) => { if (e.id >= id) e.src = starOff; });
  }

  handleDate(key, value) {
    this.setState({ [key]: value });
  }

  render() {
    const { getSubmit } = this.props;
    return (
      <form>
        <h1>Avaliações</h1>
        <div>
          <input
            name="email"
            type="email"
            onChange={
              ({ target: { name, value } }) => this.handleDate(name, value)
            }
          />
          <Stars onClick={ this.onClick } />
          <textarea
            data-testid="product-detail-evaluation"
            name="assessment"
            onChange={
              ({ target: { name, value } }) => this.handleDate(name, value)
            }
          />
          <button type="button" onClick={ () => getSubmit(this.state) }>Avaliar</button>
        </div>
      </form>
    );
  }
}

Evalue.propTypes = {
  getSubmit: PropTypes.func.isRequired,
};

export default Evalue;
