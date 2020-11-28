import React, { Component } from 'react';
import ReviewForm from '../components/ReviewForm';
import reviews from '../services/reviews';
import {
  addReviewInLocalStorage,
  recoveryReviewsFromLocalStorage,
} from '../services/reviewsFunctions';

class ReviewList extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);

    this.state = {
      reviewsObj: reviews,
    }    
  }

  componentDidMount() {
    addReviewInLocalStorage(this.state.reviewsObj);
  } 

  async onClick(reviewData) {
    // const oldList = recoveryReviewsFromLocalStorage();
    // this.setState({
    //   reviewsObj: oldList,
    // })
    // console.log(oldList);    
    const currentReviews = this.state.reviewsObj;
    console.log(currentReviews);
    const nextId = currentReviews[currentReviews.length - 1].id + 1;
    console.log(nextId);
    const newReview = { ...reviewData, id: nextId };   
    console.log(newReview) 
    this.setState((previousState) => ({
      reviewsObj: [...previousState.reviewsObj, newReview],
    }, () => {
      addReviewInLocalStorage(this.state.reviewsObj);
      console.log(recoveryReviewsFromLocalStorage());
      const newReviewsList = this.state.reviewsObj;
      console.log(newReviewsList);
    }));
    // const newReviewsList = this.state.reviewsObj
    // console.log(newReviewsList);
    // addReviewInLocalStorage(newReviewList);    
  }

  render() {  
    const { reviewsObj } = this.state;

    return (      
      <div>
        <ReviewForm onClick={this.onClick} />
        <div>
          {reviewsObj.map(({email, rating, comments, id}) =>
            <div key={id}>
              <span>{email}</span>
              <span>{rating}</span>
              <p>{comments}</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default ReviewList;