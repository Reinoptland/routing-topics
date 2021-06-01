import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import ImageGallery from "./pages/ImageGallery";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/images/dogs">Dogs</Link>
            </li>
            <li>
              <Link to="/images/love">Love</Link>
            </li>
            <li>
              <Link to="/images/cheese">Cheese</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route path="/images/:topic">
            <ImageGallery />
          </Route>
          <Route path="/">
            <h1>404 not found, sorry</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}
