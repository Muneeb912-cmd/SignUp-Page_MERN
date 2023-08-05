import React, { useState } from "react";
import styles from './LoginScree.module.css';
import img1 from '../../Assests/react.png';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const defaultState = {
  name: null,
  email: null,
  password: null,
  nameError: null,
  emailError: null,
  passwordError: null,
};

const LoginScreen = () => {

  const [state, setState] = useState(defaultState);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (!state.name) {
      nameError = "Name field is required";
    }

    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!state.email || reg.test(state.email) === false) {
      emailError = "Email Field is Invalid";
    }

    if (!state.password) {
      passwordError = "Password field is required";
    }

    if (emailError || nameError || passwordError) {
      setState((prevState) => ({
        ...prevState,
        nameError,
        emailError,
        passwordError,
      }));
      return false;
    }
    return true;
  };

  const submit = () => {
    if (validate()) {
      console.warn(state);
      setState(defaultState);
    }
  };

  const navigate = useNavigate();

  function gotoSignUp(event) {

    navigate('/signup');
  }


  return (
    <>
    <Link to="/login"></Link>
    <div className={styles["split-screen"]}>
      <div className={styles["left-half"]}>
        <div className={styles["top-section"]}>
          <div className={styles["logo-container"]}>
            <img src={img1} className={styles["App-logo"]} alt="logo" />
          </div>
          <h2 className={styles["uni-title"]}>React Login Page</h2>
        </div>
        <div className={styles["centered-section"]}>
          <h1>Login Page Design Using React</h1>
          <div>Discover a world of endless possibilities with React JS</div>
          <br />
          <br />
          <br />
          <br />
          <div>
            <label>Don't have an Account? </label>

            <button className={styles["signup-button"]} onClick={() => {gotoSignUp()}}>
              Sign up
            </button>

          </div>
          <div className={styles['have_account']}>
            <label>Already have an Account? </label>

            <button className={styles["signup-button"]} onClick={() => { }}>
              Sign In
            </button>

          </div>
        </div>
        <div className={styles["bottom-section"]}>
          <p className={styles["copy-right"]}>© 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
      <div className={styles["right-half"]}>
        <div className={styles["login-form"]}>
          <form>
            <div>
              <h1>Welcome Back</h1>
              <br />
              <br />
              <p>Fill in the following fields:</p>
            </div>
            <div>
              <label htmlFor="floatingInput">Email address</label>
              <input
                type="email"
                className={`${styles["form-control"]} ${state.emailError ? styles.invalid : ''}`}
                id="floatingInput"
                name="email"
                placeholder="name@example.com"
                value={state.email}
                onChange={handleInputChange}
              />

              <span className={styles["text-danger"]}>{state.emailError}</span>
            </div>
            <div>
              <label htmlFor="floatingPassword">Password</label>
              <input
                type="password"
                className={`${styles["form-control"]} ${state.passwordError ? styles.invalid : ""}`}
                id="floatingPassword"
                name="password"
                placeholder="Password"
                value={state.password}
                onChange={handleInputChange}
              />
              <span className={styles["text-danger"]}>{state.passwordError}</span>
            </div>

            <div className={styles["form-check"]}>
              <input className={styles["form-check-input"]} type="checkbox" value="" id="rememberPasswordCheck" />
              <label className={styles["form-check-label"]} htmlFor="rememberPasswordCheck">
                Remember password
              </label>
            </div>
            <br />
            <div className={styles["text-center"]}>
              <a className={styles["small"]} href="./App.js">
                Forgot password?
              </a>
            </div>
            <br />
            <br />
            <div className={styles["d-grid"]}>
              <button className={styles["google-signup-button"]} type="button" onClick={submit}>
                Sign in
              </button>
            </div>
          </form>
          <div className={styles["divider"]}>
            <span className={styles["divider-line"]}></span>
            <span className={styles["divider-text"]}>or</span>
            <span className={styles["divider-line"]}></span>
          </div>
          <button className={styles["google-signup-button"]}>Login with Google</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default LoginScreen;