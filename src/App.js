import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Products from './pages/Products';
import Header from './components/Header';
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={ Products } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
