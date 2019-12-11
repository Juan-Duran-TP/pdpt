import React from 'react';
import './App.css';
import {Employee, Main} from './Employee.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  let time = (new Date()).toUTCString()+'-6';
  console.log("start:",time);
  return (
    <Router>
      <div className="App">
      <nav className="App-header">
          <ul className="Nav">
            <li >
              <Link to="/" className="whiteLink">Home</Link>
            </li>
            <li>
              <Link to="/log-in" className="whiteLink">Log-in</Link>
            </li>
            <li>
              <Link to="/about" className="whiteLink">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/log-in">
            <Main />
          </Route>
          <Route path="/">
            <Employee />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}
function About() {
  return (
    <div>
      <h2>About</h2>
      <p>
        In my free time I enjoy playing the Star Wars Roleplaying Game. I am my group's game master and for our most recent campaign
                  we've had a consistent session every other week for the past three months. In addition to this, I also play Star Wars Armada,
                  a  Star Wars tabletop game, with the local Houston area group every week. This has been a more recent hobby I've acquired
                  and I'm aspiring to qualify for the international championships.
      </p>

    </div>
  );
}

export default App;
