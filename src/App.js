import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import DigitalIdentity from "./pages/DigitalIdentity";
import VerifiedCredential from "./pages/VerifiedCredential";
import PersonalDataStorage from "./pages/PersonalDataStorage";
import PrivacyPolicy from "./pages/Privacy";
import TermsAndService from "./pages/Terms";
// import PeerToPeerNetwork from './pages/PeerToPeerNetwork';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Tuum Tech</title>
        <meta
          name="description"
          content="Tuum Technologies is the software engineering leader of the Open Decentralized Internet space. Our suite of Elastos powered products and services help developers build decentralized applications and enable individuals to control data on an open web."
        />
        <meta name="theme-color" content="#000000" />
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route
            path="/solutions/digitalidentity"
            exact
            component={DigitalIdentity}
          />
          <Route
            path="/solutions/verifiedcredential"
            exact
            component={VerifiedCredential}
          />
          <Route
            path="/solutions/personaldatastorage"
            exact
            component={PersonalDataStorage}
          />
          <Route path="/privacy-policy" exact component={PrivacyPolicy} />
          <Route path="/terms-conditions" exact component={TermsAndService} />
          {/* <Route
          path='/solutions/peertopeernetwork'
          exact
          component={PeerToPeerNetwork}
        /> */}
          <Route path="/products/profile" exact component={Profile} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
