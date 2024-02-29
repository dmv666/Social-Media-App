import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Containers/Home";
import Navbars from "../Components/Navbars";
import Add from "../Components/Add";
import List from "../Components/List";
import Search from "../Components/Search";


const DashboarRouter = () => {
  return (
    <>
      <Navbars />
      <List />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/add" element={<Add />} />
        <Route path="/search" element={<Search />} />

      </Routes>
    </>
  );
};

export default DashboarRouter;
