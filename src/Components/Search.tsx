import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { actionSearchProductAsyn } from "../Redux/actions/actionsProduct";
import { useFormik } from "formik";
import List from "./List";

const SearchContainer = styled.div`
  margin: 20px auto;
  max-width: 500px;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 5px;
`;

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
            error ={formik.touched.search && Boolean(formik.errors.search)}
            helperText={formik.touched.search && formik.errors.search}
          />
  
          <Button type="submit">Search</Button>
        </form>
        <List />
      </div>
    )
}

  export default Search;