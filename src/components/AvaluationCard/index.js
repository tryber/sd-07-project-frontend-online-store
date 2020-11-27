import React, { Component } from 'react';

class AvaluationCard extends Component {
  render() {
    const { email, text, stars } = this.props;
    return(
      <section>
        <p>{email}</p>
        <p>{text}</p>
        <p>{stars}</p>
      </section>
    );
  }
}

export default AvaluationCard;
