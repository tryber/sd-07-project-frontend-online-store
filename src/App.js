import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={ Home } />
      </BrowserRouter>
    </div>
  );
}

export default App;
