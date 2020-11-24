import React from 'react';
import './InitialScreen.css';

class Kart extends React.Component {
  constructor() {
    super();
    this.state = {
      product: [],
    };
  }

  render() {
    const { message } = this.state;
    return (
      <div className="kart">
      </div>
    );
  }
}

export default Kart;