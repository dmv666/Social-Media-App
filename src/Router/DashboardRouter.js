import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbars from "../Components/Navbars";
import Add from "../Components/Add";
import List from "../Components/List";
import Perfil from "../Components/Perfil";
import Search from "../Components/Search";



const DashboardRouter = () => {
  return (
    <>
      <Navbars />
      <List />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/add" element={<Add />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/search" element={<Search />} />

      </Routes>
    </>
  );
};

export default DashboardRouter;
