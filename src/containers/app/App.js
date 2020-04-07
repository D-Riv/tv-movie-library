import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home";
import Shows from "../Shows";
import Movies from "../movies/Movies";
import Library from "../Library";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies} />
          {/* <Route path="/shows" component={Shows} /> */}
          {/* <Route path="/library" component={Library} /> */}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
