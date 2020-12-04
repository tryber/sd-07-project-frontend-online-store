import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Layout from './pages/Layout'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout />
    </BrowserRouter>
  );
}

export default App;
