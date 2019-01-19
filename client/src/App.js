import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Contact from "./pages/Contact";
import Emergency from "./pages/Emergency";
import Login from "./pages/Login";
import NewAccount from "./pages/NewAccount";
import PetHome from "./pages/PetHome";
import PetProfile from "./pages/PetProfile";
import Reminders from "./pages/Reminders";
import NoMatch from "./pages/NoMatch";
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Home" component={PetHome} />
            <Route exact path="/NewAccount" component={NewAccount} />
            <Route exact path="/PetProfile" component={PetProfile} />
            <Route exact path="/Reminders" component={Reminders} />
            <Route exact path="/Emergency" component={Emergency} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/NoMatch" component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
}

export default App;
