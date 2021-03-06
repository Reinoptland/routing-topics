import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect,
} from "react-router-dom";
import ImageGallery from "./pages/ImageGallery";
import Login from "./pages/Login";

export default function App() {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);
  // console.log("WHAT IS HISTORY:", history);
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
          {!authenticated && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {authenticated && (
            <>
              <li>
                <Link to="/images/dogs">Dogs</Link>
              </li>

              <li>
                <Link to="/images/love">Love</Link>
              </li>
              <li>
                <Link to="/images/cheese">Cheese</Link>
              </li>
              <li>
                <button onClick={() => setAuthenticated(false)}>logout</button>
              </li>
            </>
          )}
          <li>
            {authenticated && (
              <>
                <input
                  value={searchText}
                  onChange={(event) => setSearchText(event.target.value)}
                />
                <button onClick={search} disabled={!authenticated}>
                  🔍
                </button>
              </>
            )}
            {!authenticated && (
              <p>
                Please <Link to="/login">log in</Link> to search for images
              </p>
            )}
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
          {authenticated ? <ImageGallery /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          {/* passing props: authenticated, setAuthenticated */}
          {authenticated ? (
            <Redirect to="/" />
          ) : (
            <Login
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          )}
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
