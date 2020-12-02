import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as css from './style';
import * as cpIcons from '../../components/Icons';

class RatingStar extends Component {
  constructor(props) {
    super(props);
    const { rating } = this.props;
    this.state = {
      rating,
      hoverValue: null,
    };
  }

  setColorModeView(numberStar) {
    const { rating, hoverValue } = this.state;
    return numberStar <= (hoverValue || rating) ? '#ffc107' : '#aaa';
  }

  async eventHandleClick(name, value) {
    const { onClick } = this.props;
    const { rating } = this.state;
    await this.setState({ [name]: value });
    onClick(rating);
  }

  renderModeViewCard() {
    const { mode } = this.props;
    const numberArr = 5;

    return [...Array(numberArr)].map((_star, index) => {
      const numberStar = index + 1;
      return (
        <div key={ numberStar }>
          <cpIcons.Star
            modeview={ mode }
            setcolor={ this.setColorModeView(numberStar) }
          />
        </div>
      );
    });
  }

  renderModeViewInput() {
    const { mode } = this.props;
    const numberArr = 5;

    return [...Array(numberArr)].map((_star, index) => {
      const numberStar = index + 1;
      return (
        <label htmlFor="rating" key={ numberStar }>
          <input
            name="rating"
            className="inputRadio"
            type="radio"
            onClick={ () => this.eventHandleClick('rating', numberStar) }
          />
          <cpIcons.Star
            modeview={ mode }
            setcolor={ this.setColorModeView(numberStar) }
            onMouseEnter={ () => this.eventHandleClick('hoverValue', numberStar) }
            onMouseLeave={ () => this.eventHandleClick('hoverValue', null) }
          />
        </label>
      );
    });
  }

  // prettier-ignore
  render() {
    const { mode } = this.props;
    return (
      <css.Ctn>
        { mode === 'input' && this.renderModeViewInput() }
        { mode === 'card' && this.renderModeViewCard() }
      </css.Ctn>
    );
  }
}

RatingStar.propTypes = {
  rating: PropTypes.number,
  onClick: PropTypes.func,
  mode: PropTypes.string,
};

RatingStar.defaultProps = {
  rating: 1,
  onClick: () => {},
  mode: '',
};

export default RatingStar;
