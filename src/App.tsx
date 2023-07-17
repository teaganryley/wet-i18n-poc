import React, { useCallback } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { SplashTemplate, WetProvider } from '@arcnovus/wet-boew-react';
import Home from './components/home';

const APP_NAME_EN = "Canadian Wildland Fire Information System";
const APP_NAME_FR = "Système canadien d'information sur les feux de végétation";

const App = () => {
  const history = useHistory();

  const handleClick = useCallback(
    (a: { href: string; }) => {
      history.push(a.href.replace(window.location.origin, ""));
    },
    [history]
  );

  return (
    <WetProvider linkHandler={handleClick}>
      <Switch>
        <Route exact path="/en/" component={Home} />
        <Route exact path="/fr/" component={Home} />
        <Route exact path="/">
          <SplashTemplate
            nameEng={APP_NAME_EN}
            nameFra={APP_NAME_FR}
          />
        </Route>
      </Switch>
    </WetProvider>
  );
};

export default App;
