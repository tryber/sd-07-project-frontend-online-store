import React from 'react';
import * as cp from './components';
import * as view from './views';
import * as page from './pages';
import GlobalStyle from './style/global';

function App() {
  return (
    <div>
      <GlobalStyle />
      <view.AmountControllers />
    </div>
  );
}

export default App;
