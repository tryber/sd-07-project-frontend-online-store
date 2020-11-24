import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

import Products from './pages/Products';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Products} /> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
