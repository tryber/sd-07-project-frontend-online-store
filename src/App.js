import React from 'react';
import * as cp from './components';

import * as view from './views';
import * as page from './pages';
import * as api from './services/api';

import GlobalStyle from './style/global';

function App() {
  return (
    <div>
      {console.log(api.getProductsFromCategoryAndQuery('dss', ''))}
      <GlobalStyle />

      <page.Home />
    </div>
  );
}

export default App;
