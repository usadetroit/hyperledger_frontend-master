import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Create from "./components/Create";
import Quote from "./components/Quote";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="auth-inner">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/quote/:id" component={Quote} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
