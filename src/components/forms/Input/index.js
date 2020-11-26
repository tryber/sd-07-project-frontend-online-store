import React from 'react';
import * as css from './style';

class Input extends React.Component {
  render() {
    const { getEvent } = this.props;
    return <css.Input {...this.props} onChange={(event) => getEvent(event)} />;
  }
}

export default Input;
