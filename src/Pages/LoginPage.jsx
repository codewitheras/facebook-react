import React from "react";
import "./LoginPage.css";
import { Link, useHistory } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function LoginPage() {
  const history = useHistory("");

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Sign In user using Firebase Email and Password Authentication
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);

        const user = userCredential.user;
        console.log("====================================");
        console.log(user);
        console.log("====================================");
        history.push("/");
      })
      .catch((e) => {
        // if (
        //   e.message ===
        //   "The password is invalid or the user does not have a password"
        // ) {
        //   Will use a Toast Component to display any warning or notification
        //   alert("Please check your credentials again.");
        // } else if (
        //   e.message ===
        //   "There is no user corresponding to this identifier. The user may have been deleted."
        // ) {
        //   Will use a Toast Component to display any warning or notification
        //   alert(e.message);
        // }

        console.log("====================================");
        console.log(e.message);
        console.log("====================================");
      });

    // console.log(email);
    // console.log(password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="container__left">
        <h3 className="container__title">facebook</h3>
        <p className="container__tag">
          Connect with friends and the world around you on Facebook.
        </p>
      </div>
      <div className="container__right">
        <div className="right__form_container">
          <form
            className="login__form"
            id="loginForm"
            autoCapitalize="off"
            autoComplete="off"
            onSubmit={handleLogin}
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
            <button type="submit" id="loginBtn">
              Log In
            </button>
            <div className="forgot__psd">
              <a href="resetpassword.html">Forgot password?</a>
            </div>
          </form>
          <div className="divider"></div>
          <div className="create__account">
            {/* <a href="signup.html">Create new account</a> */}
            <Link to="/signup">Create new account</Link>
          </div>
        </div>
        <p>
          <b>Create a Page</b> for a celebrity, brand or business.
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
