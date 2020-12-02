import React from 'react';
import PropTypes from 'prop-types';
import * as css from './style';

class Input extends React.Component {
  render() {
    const { getEvent } = this.props;
    return <css.Input { ...this.props } onChange={ (event) => getEvent(event) } />;
  }
}

Input.propTypes = {
  getEvent: PropTypes.func,
};

Input.defaultProps = {
  getEvent: () => {},
};

export default Input;
