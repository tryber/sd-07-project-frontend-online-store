import { render } from '@testing-library/react';
import React from 'react';
import * as api from './services/api';

class App extends React.Component {
  constructor() {
    super();

    this.testApi = this.testApi.bind(this);
  }

  componentDidMount() {
    this.testApi();
  }

  testApi() {
    api.getCategories().then(categories => { console.log(categories) });
  }

  render() {
    return (
      <div>
        <p>Funcionou!</p>
      </div>
    );
  }
};

export default App;
