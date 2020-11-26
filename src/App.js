import React from 'react';
import * as cp from './components';
import * as icon from './components/Icons';
import * as view from './views';
import GlobalStyle from './style/global';

function App() {
  
  
  return (
    <div>
      < GlobalStyle />
      < view.SearchInput />
      < icon.Back />
      < icon.Cart />
      < icon.Close />
      < icon.Minus />
      < icon.Plus /> 
    </div>
  );

}

export default App;
