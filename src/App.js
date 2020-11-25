import React from 'react';
import './App.css';
import * as api from './services/api';

class App extends React.Component {
  render() {
    api.getCategories().then((data) => console.log(data));
    return <div>Oi</div>;
  }
}

export default App;
