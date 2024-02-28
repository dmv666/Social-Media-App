import React from "react";
import { Button, Form } from "react-bootstrap";
import useForm from "../Hooks/useForm";
import { actionEditProductAsyn } from "../Redux/actions/actionsProduct";
import { useDispatch } from "react-redux";

const EditProduct = ({ datos, handleClose }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formValue, handleInputChange, reset] = useForm({
    des: datos.description,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    let obj = {
      id: datos.id,
      description: formValue.des,
    };
    dispatch(actionEditProductAsyn(obj));
    handleClose();
  };
  return (
    <div className="divAdd">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formPlaintextprice">
          <Form.Label column sm="2">
            Description
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="description"
            name="des"
            value={formValue.des}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button type="submit">Guardar Modificado</Button>
      </Form>
    </div>
  );
};

export default EditProduct;
