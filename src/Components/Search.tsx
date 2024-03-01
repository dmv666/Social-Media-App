import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {  } from "../Redux/actions/actionsProduct";
import { useFormik } from "formik";
import Amigos from "./Amigos";
import { actionSearchProductAsyn } from "../Redux/actions/actionsProduct";


const Search = () => {
  const dispatch = useDispatch()
const formik = useFormik({
  initialValues: {
    search: "",
  },
  validationSchema: Yup.object({
    search: Yup.string().required("Este campo es requerido"),
  }),
  onSubmit: (values) => {
    console.log(values);
      dispatch(actionSearchProductAsyn(values.search))
  },
});

  return (
      <div>
        <h1> Comienza a buscar a tus amigos!!!</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          name="search"
          placeholder="Buscar Amigos"
          onChange={formik.handleChange}
          value={formik.values.search}
          className={formik.touched.search && formik.errors.search ? 'error' : ''}
        />

        <Button type="submit">Buscar</Button>
      </form>
      <Amigos />
    </div>
  )
}

export default Search;