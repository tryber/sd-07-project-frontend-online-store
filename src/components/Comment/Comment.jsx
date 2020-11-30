import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
  render() {
    const { commentObj } = this.props;
    const { ratingStar, email, comment } = JSON.parse(commentObj);
    return (
      <div>
        <div>
          <p>{`Email: ${email}`}</p>
          <p>{`Estrelas: ${ratingStar}`}</p>
        </div>
        <p>{comment}</p>
      </div>
    );
  }
}

Comment.propTypes = {
  commentObj: PropTypes.string.isRequired,
};

export default Comment;
