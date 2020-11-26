import React, { Component } from 'react';
import RatingForm from './RatingForm';

class ProductReview extends Component {
  constructor() {
    super();
    this.addComment = this.addComment.bind(this);
    this.restoreState = this.restoreState.bind(this);
    this.state = {
      review: [],
    };
  }

  componentDidMount() {
    this.restoreState();
  }

  restoreState() {
    const review = JSON.parse(localStorage.getItem('review'));
    this.setState(review);
  }

  addComment(newComment) {
    const { review } = this.state;
    const added = review.concat(newComment);
    this.setState({ review: added });
    localStorage.setItem('review', JSON.stringify(this.state));
  }

  render() {
    const { review } = this.state;
    return (
      <div>
        <RatingForm addComment={ this.addComment } review={ review } />
        {review
          ? review.map((userReview) => (
            <div key={ userReview.email }>
              <input defaultValue={ userReview.email } readOnly required />
              <input defaultValue={ userReview.rating } readOnly required />
              <input defaultValue={ userReview.comment } readOnly />
            </div>
          )) : <p>Não existem comentarios!</p>}
      </div>
    );
  }
}

export default ProductReview;

// TODO: Adicionar as estrelinhas(via css)
