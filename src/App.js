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
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/about/team">Team</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/images">Images</Link>
            </li>
            <li>
              <Link to="/users/rein">Rein</Link>
            </li>
            <li>
              <Link to="/users/mjackson">MJ</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route path="/images">
            <ImageGallery />
          </Route>
          <Route exact={true} path="/about">
            <About />
          </Route>
          <Route path="/about/team">
            <Team />
          </Route>
          {/* <Route path="/users/mjackson">
            <Profile />
          </Route>
          <Route path="/users/reinoptland">
            <Profile2 />
          </Route>
          <Route path="/users/levi">
            <Profile3 />
          </Route> */}
          <Route path="/users/:username/repositories/:repositoryname">
            <Profile />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <h1>404 not found, sorry</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Profile() {
  const params = useParams();

  // nu hebben gebruikersnaam
  // -> haal het profiel op van de server
  // axios.get(`github.com/api/users/${params.username}`)
  console.log("WAT ZIT HIER IN!", params);
  return <h2>{params.username}</h2>;
}
// function Profile2() {
//   return <h2>Rein Op 't Land</h2>;
// }
// function Profile3() {
//   return <h2>Levi</h2>;
// }

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Team() {
  return <h2>Team</h2>;
}
