import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  const auth = localStorage.getItem("user");

  const logout = ()=>{
    localStorage.clear();
  }
  return (
    <div className="Nav">
      {auth ? (
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/AProduct"}>Add Prodcut</Link>
          </li>
          <li>
            <Link to={"/Uprodcut"}>Update Product</Link>
          </li>
          <li>
            <Link to={"/DProdcut"}>Delete Product</Link>
          </li>
          <li>
            <Link to={"/Login"} onClick={logout}>Log-Out(  {JSON.parse(auth).name + JSON.parse(auth).lastname})  </Link>
          </li>
        </ul>
      ) : (
        <ul className="right">
          <li>
            <Link to={"/Register"}>Register</Link>
          </li>
          <li>
            <Link to={"/Login"}>Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};
export default Nav;
