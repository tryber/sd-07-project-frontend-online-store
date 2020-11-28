import React, { Component } from 'react';
import * as css from './style';
import * as icon from '../../components/Icons';

export class RatingStar extends Component {
  constructor(props) {
    super(props);
    const { rating } = this.props;
    this.state = {
      rating: rating,
      hoverValue: null,
    };
  }

  async eventHandleClick(name, value) {
    const { onClick } = this.props;
    await this.setState({ [name]: value });
    // onClick(this.state.rating);
  }

  setColorModeView(numberStar) {
    const { rating, hoverValue } = this.state;
    return numberStar <= (hoverValue || rating) ? '#ffc107' : '#aaa';
  }

  renderModeViewCard() {
    const { mode } = this.props;

    return [...Array(5)].map((_star, index) => {
      const numberStar = index + 1;
      return (
        <div key={index}>
          <icon.Star modeview={mode} setcolor={this.setColorModeView(numberStar)} />
        </div>
      );
    });
  }

  renderModeViewInput() {
    const { mode } = this.props;

    return [...Array(5)].map((_star, index) => {
      const numberStar = index + 1;
      return (
        <label key={index}>
          <input
            name="rating"
            className="inputRadio"
            type="radio"
            onClick={() => this.eventHandleClick('rating', numberStar)}
          />
          <icon.Star
            modeview={mode}
            setcolor={this.setColorModeView(numberStar)}
            onMouseEnter={() => this.eventHandleClick('hoverValue', numberStar)}
            onMouseLeave={() => this.eventHandleClick('hoverValue', null)}
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

export default RatingStar;
