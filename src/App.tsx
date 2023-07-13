import { Switch, Route } from 'react-router-dom';
import Home from './components/home';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/en/" component={Home} />
    <Route exact path="/fr/" component={Home} />
  </Switch>
);

export default App;
