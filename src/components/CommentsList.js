import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentsList extends Component {
  render() {
    console.log(this.props);
    const { comments } = this.props;
    return (
      <>
        <h1>Listagem de Comentários</h1>
        { comments.map((comment) => (
          <div key={ comment.id }>
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
              { comment.comment }
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
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
  })).isRequired,
};

export default CommentsList;
