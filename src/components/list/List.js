import React from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import ListData from "./ListData";

const List = () => {
  const navigate = useNavigate();
  const shops = useSelector((state) => state.add);
  // console.log(shops);
  const handleClick = () => {
    navigate("/add");
  };
  return (
    <div className="container-list">
      <h3>Shop-List</h3>
      <button onClick={handleClick}>Add-Shop</button>
      <div className="list-items-container">
        <ListData />
      </div>
    </div>
  );
};

export default List;
