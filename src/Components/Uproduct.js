import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

const Uprodcut = () => {
  const params = useParams();
  const [name, setname] = useState("");
  const [model, setmodel] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");

  const navigate = useNavigate()
  useEffect(() => {
    predata();
  }, []);

  const predata = async () => {
    let data = await fetch(`http://localhost:5001/Predata/${params.id}`);
    let result = await data.json();
    setname(result.name);
    setmodel(result.model);
    setcategory(result.category);
    setprice(result.price);
  };
  const pushdata = async () => {
    let data = await fetch(`http://localhost:5001/Uproduct/${params.id}`, {
      method: "PUT",
      body: JSON.stringify({name,model,category,price}),
      headers:{
        "Content-Type":"application/json"
      }
    });
    data =await data.json()
    if(data){
        navigate("/")
    }else {
        navigate("/Uprodcut")
    }
  };
 
  return (
    <div className="register">
      <h1>Welcome To the Prodcut Update Moduel</h1>
      <input
        type={"text"}
        className="reg"
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
        placeholder="Please Enter Product Name"
      />
      <input
        type={"text"}
        className="reg"
        value={model}
        onChange={(e) => {
          setmodel(e.target.value);
        }}
        placeholder="Please Enter Product Model"
      />
      <input
        type={"text"}
        className="reg"
        value={category}
        onChange={(e) => {
          setcategory(e.target.value);
        }}
        placeholder="Please Enter Product Category"
      />
      <input
        type={"text"}
        className="reg"
        value={price}
        onChange={(e) => {
          setprice(e.target.value);
        }}
        placeholder="Please Enter Product Price"
      />
      <button className="rbutton" onClick={pushdata}>
        Update data
      </button>
    </div>
  );
};

export default Uprodcut;
