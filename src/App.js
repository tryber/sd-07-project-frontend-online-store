import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Products from './pages/Products';
import CategoryList from './components/CategoryList';

import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Products} />
      </Switch>
    </BrowserRouter>
    <CategoryList />

    </div>
  );
}

export default App;
