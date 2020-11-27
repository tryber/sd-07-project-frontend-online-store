import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      name: '',
      rating: 0,
      text: '',
    };
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      name: '',
      rating: 0,
      text: '',
    });
  }

  updateComent(field, newValue) {
    this.setState({ [field]: newValue });
  }

  render() {
    const { name, rating, text } = this.state;
    return (
      <div>
        <h1>What is your opion about?</h1>
        <label htmlFor="name">
          Your Name:
          <input
            id="name"
            type="text"
            placeholder="Your name"
            value={ name }
            onChange={ (event) => this.updateComent('name', event.target.value) }
          />
        </label>
        <label htmlFor="rating">
          Rating:
          <input
            id="rating"
            type="number"
            value={ rating }
            onChange={ (event) => this.updateComent('rating', event.target.value) }
          />
        </label>
        <label htmlFor="comment">
          Your opinion about the product:
          <textarea
            id="comment"
            placeholder="Comment here..."
            value={ text }
            onChange={ (event) => this.updateComent('text', event.target.value) }
            data-testid="product-detail-evaluation"
          />
        </label>
        <button type="button" onClick={ this.handleClick }>Comment</button>
      </div>
    );
  }
}

CommentForm.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CommentForm;
