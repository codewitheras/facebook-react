import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import './SignupPage.css'
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebase";

function SignupPage() {
  const history = useHistory("");

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    // Sign In user using Firebase Email and Password Authentication
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // db.collection
        history.push("/");
        console.log("====================================");
        console.log(userCredential);
        console.log("====================================");
      })
      .catch((e) => {
        if (
          e.message ===
          "The password is invalid or the user does not have a password"
        ) {
          // Will use a Toast Component to display any warning or notification
          alert("Please check your credentials again.");
        } else if (
          e.message ===
          "There is no user corresponding to this identifier. The user may have been deleted."
        ) {
          // Will use a Toast Component to display any warning or notification
          alert(e.message);
        }
      });

    console.log(email);
    console.log(password);

    setEmail("");
    setPassword("");
  };
  return (
    <div className="container">
      <div className="container__right">
        <div className="right__form_container">
          <form
            onSubmit={handleSignup}
            className="login__form"
            id="signupForm"
            autoCapitalize="off"
            autoComplete="off"
          >
            <input
              type="email"
              name="email"
              id="emailInput"
              placeholder="Email or phone number"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              id="passwordInput"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" id="signupBtn">
              Sign Up
            </button>
          </form>
          <div className="divider"></div>
          <div className="create__account">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage