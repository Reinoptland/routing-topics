import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import ImageGallery from "./pages/ImageGallery";

export default function App() {
  const history = useHistory();
  console.log("WHAT IS HISTORY:", history);
  const [searchText, setSearchText] = useState("");

  function search() {
    console.log("WAT HEEFT DE PERSOON INGEVULD?", searchText);

    // we gaan de gebuiker doorsturen naar:

    // /images/searchText
    history.push(`/images/${searchText}`);
  }
  return (
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
        <input
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
        <button onClick={search}>🔍</button>
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
  );
}

function Home() {
  return <h2>Home</h2>;
}
