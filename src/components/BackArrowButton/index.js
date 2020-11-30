import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import './BackArrowButton.css';

class BackArrowButton extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    const { visibility } = this.props;
    return (
      <input
        className={ visibility ? 'back-button' : 'back-button hidden' }
        type="button"
        onClick={ this.goBack }
      />
    );
  }
}

BackArrowButton.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  visibility: PropTypes.bool,
};

BackArrowButton.defaultProps = {
  visibility: true,
};

const BackArrowButtonWithRouter = withRouter(BackArrowButton);
export default BackArrowButtonWithRouter;
