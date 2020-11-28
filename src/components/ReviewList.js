import React, { Component } from 'react';
import ReviewForm from './ReviewForm';
// import reviews from '../services/reviews';
import {
  addReviewInLocalStorage,
  recoveryReviewsFromLocalStorage,
} from '../services/reviewsFunctions';

class ReviewList extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);

    this.state = {
      reviewsObj: recoveryReviewsFromLocalStorage(),
    };
  }

  async onClick(reviewData) {
    const currentReviews = recoveryReviewsFromLocalStorage();
    const comparatorLengthNumber = 0;
    if (currentReviews.length !== comparatorLengthNumber) {
      const nextId = currentReviews[currentReviews.length - 1].id + 1;
      reviewData.id = nextId;
    } else {
      const nextId = 1;
      reviewData.id = nextId;
    }
    this.setState((previousState) => ({
      reviewsObj: [...previousState.reviewsObj, reviewData],
    }), () => {
      const { reviewsObj } = this.state;
      addReviewInLocalStorage(reviewsObj);
    });
    // const oldList = recoveryReviewsFromLocalStorage();
    // this.setState({
    //   reviewsObj: oldList,
    // })
    // console.log(oldList);
    // console.log(currentReviews);
    // console.log(nextId);
    // const newReview = { ...reviewData, id: nextId };
    // console.log(newReview)
    // this.setState((previousState) => ({
    //   reviewsObj: [...previousState.reviewsObj, reviewData],
    // }, () => {
    //   addReviewInLocalStorage(this.state.reviewsObj);
    //   // console.log(recoveryReviewsFromLocalStorage());
    //   const newReviewsList = this.state.reviewsObj;
    //   // console.log(newReviewsList);
    // }));
    // const newReviewsList = this.state.reviewsObj
    // console.log(newReviewsList);
    // addReviewInLocalStorage(newReviewList);
  }

  render() {
    const { reviewsObj } = this.state;

    return (
      <div>
        <ReviewForm onClick={ this.onClick } />
        <div>
          {reviewsObj.map(({ email, rating, comments, id }) => (
            <div key={ id }>
              <span>{email}</span>
              <span>{rating}</span>
              <p>{comments}</p>
            </div>))}
        </div>
      </div>
    );
  }
}

export default ReviewList;
