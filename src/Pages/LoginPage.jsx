import React from "react";
import "./LoginPage.css";
import { Link, useHistory } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
import { useAuth } from "./../Context/authContext";
import Toast from "../Components/Toast";

function LoginPage() {
  const history = useHistory();

  const { login } = useAuth();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = e => {
    e.preventDefault();
    // Sign user in using Firebase Email and Password Authentication...
    login(email, password)
      .then(userCredential => {
        console.log(userCredential);
        const user = userCredential.user;
        console.log(user);
        setEmail("");
        setPassword("");
        history.replace("/");
      })
      .catch(e => {
        if (
          e.message ===
          "The password is invalid or the user does not have a password"
        ) {
          // Will use a Toast Component to display any warning or notification
          alert("Please check your credentials again.");
          <Toast bgColor='red' toastMsg={e.message} txtColor='white' />;
        } else if (
          e.message ===
          "There is no user corresponding to this identifier. The user may have been deleted."
        ) {
          // Will use a Toast Component to display any warning or notification
          alert(e.message);
          <Toast bgColor='red' toastMsg={e.message} txtColor='white' />;
        }
        // console.log(e.message);
        <Toast bgColor='red' toastMsg={e.message} txtColor='white' />;
      });
  };

  return (
    <div className='container'>
      <div className='container__left'>
        <h3 className='container__title'>facebook</h3>
        <p className='container__tag'>
          Connect with friends and the world around you on Facebook.
        </p>
      </div>
      <div className='container__right'>
        <div className='right__form_container'>
          <form
            className='login__form'
            id='loginForm'
            autoCapitalize='off'
            autoComplete='off'
            onSubmit={handleLogin}>
            <input
              type='email'
              name='email'
              id='emailInput'
              placeholder='Email or phone number'
              required
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type='password'
              name='password'
              id='passwordInput'
              placeholder='Password'
              required
              onChange={e => setPassword(e.target.value)}
            />
            <button type='submit' id='loginBtn'>
              Log In
            </button>
            <div className='forgot__psd'>
              <a href='resetpassword.html'>Forgot password?</a>
            </div>
          </form>
          <div className='divider'></div>
          <div className='create__account'>
            {/* <a href="signup.html">Create new account</a> */}
            <Link to='/signup'>Create new account</Link>
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
