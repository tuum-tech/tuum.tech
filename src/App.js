import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact render={() => <Home />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
