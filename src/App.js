import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/Main';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ Main } />
      </BrowserRouter>
    );
  }
}

export default App;

