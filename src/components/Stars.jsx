import React, { Component } from 'react';
import PropTypes from 'prop-types';
import starOff from '../images/star.svg';
import starOn from '../images/starSet.svg';

class Stars extends Component {
  render() {
    const { onClick, note } = this.props;
    return (
      <div className="containerStars">
        {
          Array.from({ length: 5 }, (_, index) => (
            <button
              type="button"
              onClick={ ({ target: { parentNode } }) => onClick(parentNode) }
              key={ `key${index}` }
              onKeyPress={ index }
            >
              <img
                src={ (note <= index) ? starOff : starOn }
                alt="Star"
                id={ index + 1 }
                className="stars"
              />
            </button>
          ))
        }
      </div>
    );
  }
}

Stars.defaultProps = {
  note: 0,
  onClick: () => {},
};

Stars.propTypes = {
  note: PropTypes.number,
  onClick: PropTypes.func,
};

export default Stars;
