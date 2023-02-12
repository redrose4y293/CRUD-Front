import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    } else {
      navigate("/Register");
    }
  }, []);
  const pushdata = async () => {
    let data = await fetch("http://localhost:5001/register", {
      method: "POST",
      body: JSON.stringify({ name, lastname, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    data = await data.json();
    localStorage.setItem("user", JSON.stringify(data));
    if (data) {
      navigate("/");
    }
  };
  return (
    <div className="register">
      <h1>Welcome to The Register Moduel</h1>
      <input
        className="reg"
        type={"text"}
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
        placeholder="Please Enter Name"
      />
      <input
        className="reg"
        value={lastname}
        onChange={(e) => {
          setlastname(e.target.value);
        }}
        type={"text"}
        placeholder="Please Enter Last Name"
      />
      <input
        className="reg"
        value={email}
        onChange={(e) => {
          setemail(e.target.value);
        }}
        type={"email"}
        placeholder="Please Enter Email Adress"
      />
      <input
        className="reg"
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
        type={"password"}
        placeholder="Please Enter Password"
      />
      <input
        className="reg"
        type={"password"}
        placeholder="Please Confirm Password"
      />
      <button className="rbutton" onClick={pushdata}>
        Register
      </button>
    </div>
  );
};
export default Register;
