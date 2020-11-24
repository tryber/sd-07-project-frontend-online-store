import React from 'react';
import './App.css';
import * as api from './services/api';

function App() {
  async function teste(){
    await api.getCategories()
  }
  return (
    <div className="App">
    {teste()}
    </div>
  );
}

export default App;
