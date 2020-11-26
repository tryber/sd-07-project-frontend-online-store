import React, { Component } from 'react';

export default class Details extends Component {
  render() {
    const handleMessage = this.props;
    return(
      <div className="rating">

        <textarea
          type="text" 
          name="feedback" 
          id="feedback-input"
          data-testid="product-detail-evaluation"
          onChange={handleMessage}
        > 
        </textarea>

        <input 
          type="text" 
          name="evaluation"
          id="evaluation-input"
          onChange={handleMessage}
          required
        />
      </div>
    )
  }
}