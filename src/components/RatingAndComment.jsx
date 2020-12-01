import React from 'react';

class RatingAndComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    const { value } = event.target;

    this.setState({ rating: value });
  }

  render() {
    return (
      <form>
        <textarea
          data-testid="product-detail-evaluation"
          placeholder="Adicione um comentário (Opcional)"
        />

        <div onChange={ this.onChangeValue }>
          <label>
            <input type="radio" value="0" name="rating" />
            0
          </label>
          <label>
            <input type="radio" value="1" name="rating" />
            1
          </label>
          <label>
            <input type="radio" value="2" name="rating" />
            2
          </label>
          <label>
            <input type="radio" value="3" name="rating" />
            3
          </label>
          <label>
            <input type="radio" value="4" name="rating" />
            4
          </label>
          <label>
            <input type="radio" value="5" name="rating" />
            5
          </label>
        </div>
      </form>
    );
  }
}

export default RatingAndComment;
