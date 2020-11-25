import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={ SearchBar } />
      </BrowserRouter>
    </div>
  );
}

export default App;
