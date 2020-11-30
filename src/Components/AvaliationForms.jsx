import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AvaliationForms extends Component {
  render() {
    const { onChangeComment, onChangeName, submitComment } = this.props;
    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input onChange={ onChangeName } type="text" id="name" />
        </label>
        <label onChange={ onChangeComment } htmlFor="comment">
          Comentário:
          <textarea id="comment" />
        </label>
        <button
          onClick={ submitComment }
          type="submit"
          data-testid="product-detail-evaluation"
        >
          Enviar comentário
        </button>
      </form>
    );
  }
}

AvaliationForms.propTypes = {
  onChangeName: PropTypes.func.isRequired,
  onChangeComment: PropTypes.func.isRequired,
  submitComment: PropTypes.func.isRequired,
};

export default AvaliationForms;
