import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentsList extends Component {
  render() {
    const { comments } = this.props;
    return (
      <>
        <h1>What others have said</h1>
        { comments.map((comment) => (
          <div key={ comment.text }>
            <p>
              Name:
              {' '}
              { comment.name }
            </p>
            <p>
              Rating:
              {' '}
              { comment.rating }
            </p>
            <p>
              Comment:
              {' '}
              { comment.text }
            </p>
            {' '}
          </div>
        ))}
      </>
    );
  }
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default CommentsList;
