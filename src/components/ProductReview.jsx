import React, { Component } from 'react';
import RatingForm from './RatingForm';

class ProductReview extends Component {
  constructor() {
    super();
    this.addComment = this.addComment.bind(this);
    this.state = {
      review: [],
    };
  }

  addComment(newComment) {
    const { review } = this.state;
    const added = review.concat(newComment);
    this.setState({ review: added });
  }

  render() {
    const { review } = this.state;
    return (
      <div>
        <RatingForm addComment={ this.addComment } />
        {review
          ? review.map((userReview, index) => (
            <div key={ index }>
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

// TODO: Adicionar uma condicional verificando se o review está vazio E corresponde ao id da url.
//       Se ambos forem true, carrega o map do review.
