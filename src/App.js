import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CategoriesList from './pages/CategoriesList';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route exact path="/" component={CategoriesList} />
      </BrowserRouter>
    </div>
  );
}

export default App;
