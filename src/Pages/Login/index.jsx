import React, { useEffect, useRef, useState } from "react";
import Statics from '../Statics';
import { SHA256 } from 'crypto-js';
import './Login.scss';

function SignInSignupWithLocalStorage() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);
  const localSignUp = localStorage.getItem("signUp");
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");
  const localName = localStorage.getItem("name");

  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
    }
    if (localEmail) {
      setShow(true);
    }
  }, [localSignUp, localEmail]);

  const generateHash = (data) => {
    return SHA256(data).toString();
  };

  const handleClick = () => {
    if (name.current.value && email.current.value && password.current.value) {
      const hashedPassword = generateHash(password.current.value);
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", hashedPassword);
      localStorage.setItem("signUp", email.current.value);
      alert("Account created successfully!!");
      window.location.reload();
    }
  };

  const handleSignIn = () => {
    const hashedInputPassword = generateHash(password.current.value);

    if (email.current.value === localEmail && hashedInputPassword === localPassword) {
      localStorage.setItem("signUp", email.current.value);
      window.location.reload();
    } else {
      alert("Please Enter valid Credential");
    }
  };

  return (
    <div>
      {showHome ? (
        <Statics />
      ) : (
        show ? (
          <div className="container">
            <h1>Hello {localName}</h1>
            <div className="input_space">
              <input placeholder="Email" type="text" ref={email} />
            </div>
            <div className="input_space">
              <input placeholder="Password" type="password" ref={password} />
            </div>
            <button onClick={handleSignIn}>Sign In</button>
          </div>
        ) : (
          <div className="container">
            <h1>Login</h1>
              <label htmlFor="Nome completo">Nome:</label>
            <div className="input_space">
              <input placeholder="Nome completo" type="text" ref={name} />
            </div>
                <label htmlFor="E-mail">Email corporativo:</label>
            <div className="input_space">
              <input placeholder="E-mail" type="text" ref={email} />
            </div>
                <label htmlFor="Password">Senha:</label>
            <div className="input_space">
              <input placeholder="Password" type="password" ref={password} />
            </div>
            <button onClick={handleClick}>Sign Up</button>
          </div>
        )
      )}
    </div>
  );
}

export default SignInSignupWithLocalStorage;
