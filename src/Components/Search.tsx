import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { actionSearchProductAsyn } from "../Redux/actions/actionsProduct";
import { useFormik } from "formik";
import List from "./List";


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
      <form onSubmit={formik.handleSubmit}>
        <input
          name="search"
          placeholder="Buscar Producto"
          onChange={formik.handleChange}
          value={formik.values.search}
          className={formik.touched.search && formik.errors.search ? 'error' : ''}
        />

        <Button type="submit">Search</Button>
      </form>
    
    </div>
  )
}

export default Search;