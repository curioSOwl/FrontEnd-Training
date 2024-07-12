import "./login.css";
import Login from "./assets/kv-login.jpeg";
import Logo from "./assets/kv logo.png";
import Button from "./components/Button";
import TextField from "./components/TextField";
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginEmployee = () => {
  const [loginObject, setLoginObject] = useState({});

  const [error, setError] = useState("");
  const [color, setColor] = useState(undefined);
  const userNameRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (loginObject.username == "Aparna" && loginObject.password == "123") {
      localStorage.setItem("token", "true");
    } else {
      localStorage.setItem("token", "false");
    }
    navigate("/employee");
  };
  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  return (
    <main className="main__style">
      <div className="hero">
        {" "}
        <div className="wrapper-hero">
          <img src={Login} alt="Login Image" className="login-image" />
        </div>
      </div>

      <div className="login">
        <form action="/" method="post" className="form__employee">
          <img src={Logo} alt="Logo" className="logo" />
          <TextField
            label="Username"
            type="text"
            className="input__login span__login"
            value={loginObject.userName}
            color={color}
            error={error}
            ref={userNameRef}
            onChange={(username) => {
              if (username.length <= 10) {
                setLoginObject({ ...loginObject, username });
                setColor(undefined);
                setError("");
              } else {
                setColor("red");
                setError("more than 10 letters are not allowed!!!");
              }
            }}
          />
          <TextField
            label="Password"
            type="password"
            className="input__login span__login"
            value={loginObject.password}
            onChange={(password) => {
              setLoginObject({ ...loginObject, password });
            }}
          />

          <Button
            ButtonText="Login"
            className="button__login"
            handleSubmit={handleSubmit}
          />
        </form>
      </div>
    </main>
  );
};

export default LoginEmployee; //components are named in capital letters usually
