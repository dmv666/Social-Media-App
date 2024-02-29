import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Containers/Home";
import Navbars from "../Components/Navbars";
import Add from "../Components/Add";
import List from "../Components/List";
import Perfil from "../Components/Perfil";


const DashboarRouter = () => {
  return (
    <>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/list" element={<List />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </>
  );
};

export default DashboarRouter;
