import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    } else {
      navigate("/Login");
    }
  }, []);
  const logindata = async () => {
    let data = await fetch("http://localhost:5001/Login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    data = await data.json();
    localStorage.setItem("user", JSON.stringify(data));
    if (data.name) {
      navigate("/");
    } else {
      alert("Login Failed");
    }
  };
  return (
    <div className="register">
      <h1>Welcome to the Login Module</h1>
      <input
        type={"text"}
        className="reg"
        value={email}
        onChange={(e) => {
          setemail(e.target.value);
        }}
        placeholder="Please Enter Email"
      />
      <input
        type={"password"}
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
        className="reg"
        placeholder="Please Enter Password"
      />
      <button className="rbutton" onClick={logindata}>
        Login
      </button>
    </div>
  );
};
export default Login;
