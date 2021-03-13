import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path='/' exact render={() => <Home />} /> */}
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
