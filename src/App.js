import React from 'react';
import * as cp from './components';
import * as view from './views';
import GlobalStyle from './style/global';

function App() {
  return (
    <div>
      <GlobalStyle />
      <view.SearchInput />
    </div>
  );
}

export default App;
