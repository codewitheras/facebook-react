import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Component Imports
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(true);

  return (
    <Router>
      <div className="app">
        <Switch>
          {/* {!isUserLoggedIn ? <LoginPage /> : <HomePage />} */}
          <Route
            path="/"
            exact
            component={!isUserLoggedIn ? LoginPage : HomePage }
          />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
