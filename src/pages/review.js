import React, { Component } from 'react';

class Review extends Component {
  formReview() {
    console.log('clicou');
    // const radios = document.getElementsByName('rate');
    // const nota = radios.forEach(item => {
    //   if(item.checked === true) return item.value;
    // })
    const nota = ${"input[type='radio']:checked"}.value;
    console.log(nota);
    const texto = document.getElementById("review").value;
    let review = document.createElement('p');
    review.innerHTML =
      `${nota} Stars 
    ${texto}`;
    document.getElementById('reviews').appendChild(review);
  }
  render() {
    return (
      <div>
        <form>
          <div class="rate">
            <input type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">1 star</label>
          </div>
          <textarea type="text" id="review" width="200px" data-testid="product-detail-evaluation" />
          <button type="button" onClick={() => this.formReview()}>Enviar</button>
        </form>
        <div className="reviews" id="reviews">Reviews:
        </div>
      </div>
    );
  }
}

export default Review;
