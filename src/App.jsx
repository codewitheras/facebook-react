import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

// Component Imports
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        const userId = user.uid;
        console.log(userId);
      }
    });
  });

  return (
    <Router>
      <div className='app'>
        <Switch>
          {/* {!isUserLoggedIn ? <LoginPage /> : <HomePage />} */}
          <Route path='/' exact component={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/signup' component={SignupPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
