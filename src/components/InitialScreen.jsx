import React from 'react';

class InitialScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Digite algum termo de pesquisa ou escolha uma categoria.',
    };
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        <input type="text" />
        <h1 data-testid="home-initial-message">{message}</h1>
      </div>
    );
  }
}

export default InitialScreen;
