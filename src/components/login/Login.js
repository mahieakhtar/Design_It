import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <img
        className="subheader_logo"
        src="https://mosaic02.ztat.net/lny/reef/images/5fab1650d205a0524e2a30411cc4e9d9.svg"
        alt=""
      />

      <span>Log in</span>

      <div className="login__container">
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button">Log in</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
