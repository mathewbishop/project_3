import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Contact from "./pages/Contact";
import Emergency from "./pages/Emergency";
import Login from "./pages/Login";
import NewAccount from "./pages/NewAccount";
import PetHome from "./pages/PetHome";
import PetProfile from "./pages/PetProfile";
import Reminders from "./pages/Reminders";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {


   render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Home" component={PetHome} /> 
            <Route exact path="/NewAccount" component={NewAccount} />
            <Route exact path="/PetProfile" component={PetProfile} />
            <Route exact path="/Reminders" component={Reminders} />
            <Route exact path="/Emergency" component={Emergency} />
            <Route exact path="/Contacts" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  } 
}

export default App;
