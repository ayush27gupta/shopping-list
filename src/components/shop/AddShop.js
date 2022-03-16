import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import actionCreators from "../redux";
import "./add.css";

const AddShop = () => {
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState("");
  const [close, setClose] = useState("");

  // const btnDisable = name === "" || area === "" || category === "";

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (close < open) {
      alert("Closing cannot be before than opening");
    } else if (name === "" || area === "" || category === "") {
      alert("Please fill all details");
    } else {
      dispatch(
        actionCreators.addShop({
          name: name,
          area: area,
          category: category,
          open: open,
          close: close,
          delete: "Delete",
          id: Date.now(),
        })
      );
      navigate("/");
    }
  };
  return (
    <div className="container-add">
      <form>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <br />

        <label htmlFor="area">Area</label>
        <br />
        <select
          name="area"
          id="area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          required
        >
          <option value="select">Select</option>
          <option value="thane">Thane</option>
          <option value="pune">Pune</option>
          <option value="nashik">Nashik</option>
          <option value="nagpur">Nagpur</option>
          <option value="solapur">Solapur</option>
        </select>

        <br />

        <label htmlFor="category">Category</label>
        <br />
        <select
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="select">Select</option>
          <option value="grocery">Grocery</option>
          <option value="butcher">Butcher</option>
          <option value="baker">Baker</option>
          <option value="chemist">Chemist</option>
          <option value="stationery">Stationery</option>
        </select>

        <br />

        <label htmlFor="open">Opening</label>
        <br />
        <input
          type="date"
          name="open"
          id="open"
          value={open}
          onChange={(e) => setOpen(e.target.value)}
        />

        <br />

        <label htmlFor="close">Closing</label>
        <br />
        <input
          type="date"
          name="close"
          id="close"
          value={close}
          onChange={(e) => setClose(e.target.value)}
        />
      </form>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AddShop;
