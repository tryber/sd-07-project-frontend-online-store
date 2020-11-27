import React, { useState } from "react";
// import StarsRating from './StarsRating'


class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.addNewReview = this.addNewReview.bind(this);

    this.state = {
      email: '',
      rating: 0,
      comments: '',
     };
  }

  // const {rating, setRating} = useState(2);
  // const onStarChange = (newRating) => setRating(newRating);

  async addNewReview() {
    await this.props.onClick(this.state);
    this.setState({
      email: '',
      rating: 0,
      comments: '',
    });      
  }

  updateReview(field, newValue) {
    this.setState({ [field]: newValue });
    }

  render() {
    return (
      <div>
        <h2>Nos conte o que achou do produto:</h2>
        <input 
          type="text"
          placeholder="Email"
          required="required"
          value={this.state.email}
          onChange={(event) => this.updateReview('email', event.target.value)}
          />
        <input
          placeholder="Nota"        
          type="number"
          step={0.1}
          min={0}
          max={5}
          required="required"   
          value={this.state.rating}  
          onChange={(event) => this.updateReview('rating', event.target.value)}
        />        
        <textarea
          data-testid="product-detail-evaluation"
          placeholder="Mensagem (opcional)"
          value={this.state.comments}
          onChange={(event) => this.updateReview('comments', event.target.value)}
        />
        <button type="button" onClick={this.addNewReview}>AVALIAR</button>
        {/* <StarsRating rating={rating} handleChange={onStarChange} /> */}
      </div>
    )
  }
}
export default ReviewForm;


