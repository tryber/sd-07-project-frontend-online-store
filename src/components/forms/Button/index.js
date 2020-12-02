import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as css from './style';


class Button extends Component {
  render() {
    const { children, getEvent } = this.props;
    return (
      <css.Button { ...this.props } type="button" onClick={ () => getEvent() }>
        { children }
      </css.Button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  getEvent: PropTypes.func,
};

Button.defaultProps = {
  getEvent: () => {},
};

export default Button;
