import React, { Component } from 'react';

class AvaluationForm extends Component {
  render() {
    return(
      <section>
        <form>
          <input type="email">Email</input>
          <input type="text" />
          <button type="button" onClick >Avaliar</button>
        </form>
      </section>
    );
  }
}

export default AvaluationForm;
