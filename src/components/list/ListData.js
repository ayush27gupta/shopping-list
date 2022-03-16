import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./list.css";
import actionCreators from "../redux";

const ListData = () => {
  const dispatch = useDispatch();
  const shops = useSelector((state) => state.add);
  const [shop, setShop] = useState({
    name: "",
    area: "",
    catgory: "",
    open: "",
    close: "",
    id: "",
    delete: "",
  });

  let navigate = useNavigate();

  const handleDelete = (e) => {
    const id = +e.target.id;
    shops.shopData.map((prevState) => {
      if (+prevState.id === id) {
        setShop({
          name: prevState.name,
          area: prevState.area,
          category: prevState.category,
          open: prevState.open,
          close: prevState.close,
          id: prevState.id,
          delete: prevState.delete,
        });
      }
    });
    dispatch(actionCreators.deleteShop(shop));
    navigate("/");
  };

  if (shops.length < 1) {
    return null;
  } else {
    return (
      <div className="container-list-data">
        <br />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Area</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right">Opening Date</TableCell>
                <TableCell align="right">Closing Date</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {shops.shopData.map((shop) => (
                <TableRow
                  key={shop.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {shop.name}
                  </TableCell>
                  <TableCell align="right">{shop.area}</TableCell>
                  <TableCell align="right">{shop.category}</TableCell>
                  <TableCell align="right">{shop.open}</TableCell>
                  <TableCell align="right">{shop.close}</TableCell>
                  <TableCell align="right">
                    <button className="btn" onClick={handleDelete} id={shop.id}>
                      {shop.delete}
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
};

export default ListData;
