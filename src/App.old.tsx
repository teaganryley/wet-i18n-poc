import {
  DefaultTemplate,
  PageTitle,
  SplashTemplate,
  WetProvider,
  useLanguage,
} from "@arcnovus/wet-boew-react";
import { useCallback } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation
} from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

const Nav = () => (
  <ul>
    <li>
      <Link to="/en/">Home</Link>
    </li>
    <li>
      <Link to="/en/about">About</Link>
    </li>
    <li>
      {/*<Link to="/en/dashboard">Dashboard</Link>*/}
      <a href="/en/dashboard">Dashboard</a>
    </li>
  </ul>
);

export default function App() {
  const { currentLanguage } = useLanguage(useLocation());
  const history = useHistory();
  const labels = {
    en: {
      title: "A Title",
      contents: "Hello, World!",
      appName: "Some awesome app.",
    },
    fr: {
      title: "Un Titre",
      contents: "Bonjour!",
      appName: "Une application merveilleuse.",
    },
  };
  const handleLink = useCallback(
    (a: { href: string; }) => {
      console.log('a: ', a);
      console.log('window origin: ', window.location.origin);
      
      history.push(a.href.replace(window.location.origin, ""));
    },
    [history]
  );

  return (
    <WetProvider
      linkHandler={handleLink}
      appTitle={labels[currentLanguage ?? "en"].appName}
    >
      {currentLanguage == null ? (
        <SplashTemplate
          nameEng={labels.en.appName}
          nameFra={labels.fr.appName}
        />
      ) : (
        <DefaultTemplate>
          <Router>
            <div>
              <Nav />
              <hr />
              <Switch>
                <Route exact path="/en/">
                  <Home />
                </Route>
                <Route path="/en/about">
                  <About />
                </Route>
                <Route path="/en/dashboard">
                  <Dashboard />
                </Route>
              </Switch>
            </div>
          </Router>
        </DefaultTemplate>
      )}
    </WetProvider>
  );
}
