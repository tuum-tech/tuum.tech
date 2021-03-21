import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import DigitalIdentity from './pages/DigitalIdentity';
import VerifiedCredential from './pages/VerifiedCredential';
import PersonalDataStorage from './pages/PersonalDataStorage';
import PeerToPeerNetwork from './pages/PeerToPeerNetwork';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route
          path='/solutions/digitalidentity'
          exact
          component={DigitalIdentity}
        />
        <Route
          path='/solutions/verifiedcredential'
          exact
          component={VerifiedCredential}
        />
        <Route
          path='/solutions/personaldatastorage'
          exact
          component={PersonalDataStorage}
        />
        <Route
          path='/solutions/peertopeernetwork'
          exact
          component={PeerToPeerNetwork}
        />
        <Route path='/products/profile' exact component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
