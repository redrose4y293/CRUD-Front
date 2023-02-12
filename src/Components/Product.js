import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "bootstrap/";

const Product = () => {
  const [products, setprodcut] = useState([""]);

  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    let data = await fetch("http://localhost:5001/Prodcut");
    data = await data.json();
    setprodcut(data);
  };
  const prodelete = async (_id) => {
    let result = await fetch(`http://localhost:5001/Pdelete/${_id}`, {
      method: "delete",
    });
    result = await result.json();
    if (result) {
      getdata();
    }
  };
  return (
    <div className="product" variant="danger">
      <h1>Welcome to The Product Show List</h1>
      <ul>
        <li>Sr No:</li>
        <li>Name</li>
        <li>Model</li>
        <li>Category</li>
        <li>Price</li>
        <li>Opreations</li>
      </ul>
      {products.map((item, index) => (
        <ul key={index.id}>
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>{item.model}</li>
          <li>{item.category}</li>
          <li>{item.price}</li>
          <li>
            <Link to={"/Uprodcut/" + item._id}>Update</Link>
            <button onClick={() => prodelete(item._id)} className="b">Delete</button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Product;
