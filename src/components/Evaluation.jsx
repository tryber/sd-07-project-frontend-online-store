import React from 'react';

class Evaluation extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="comments">
          Comentarios:
          <div id="text-field">
            <textarea
              cols="30"
              rows="10"
              id="comments"
              placeholder="Comente aqui"
              data-testid="product-detail-evaluation"
            />
          </div>
        </label>
      </div>
    );
  }
}

export default Evaluation;
