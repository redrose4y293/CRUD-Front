import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Aproduct = () => {
  const [name, setname] = useState('');
  const [model, setmodel] = useState('');
  const [category, setcategory] = useState('');
  const [price, setprice] = useState('');

  const navigate = useNavigate()
  const pushdata =async ()=>{
    let data =await fetch("http://localhost:5001/Aprodcut",{
       method:"POST",
       body:JSON.stringify({name,model,category,price}),
       headers:{
        "Content-Type":"application/json"
       }
    })
    data =await data.json()
    if(data){
      navigate("/")
    }
  }

  return (
    <div className="register">
      <h1>Welcome To the Product Add Module</h1>
      <input
        className="reg" value={name} onChange={(e)=>{setname(e.target.value)}}
        type={"text"}
        placeholder="Please Enter Prodcut Name"
      />
      <input
        className="reg" value={model} onChange={(e)=>{setmodel(e.target.value)}}
        type={"text"}
        placeholder="Please Enter Product Model"
      />
      <input
        className="reg" value={category} onChange={(e)=>{setcategory(e.target.value)}}
        type={"text"}
        placeholder="Please Enter Product Category"
      />
      <input
        className="reg" value={price} onChange={(e)=>{setprice(e.target.value)}}
        type={"text"}
        placeholder="Please Enter Prodcut Price"
      />
      <button className="rbutton" onClick={pushdata}>Sumbit</button>
    </div>
  );
};

export default Aproduct;
