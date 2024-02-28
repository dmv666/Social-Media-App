import React from "react";
import { useDispatch } from "react-redux";
import useForm from "../Hooks/useForm";
import { Button, Form } from "react-bootstrap";
import { actionAddproductAsyn } from "../Redux/actions/actionsProduct";
import { FileUpload } from "../Helpers/FileUpload";

const Add = () => {
  const dispatch = useDispatch();
  const [formValue, handleInputChange, reset] = useForm({
    des: "",
    foto: " ",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    let obj = {
      id: Math.floor(Math.random() * 200),
      description: formValue.des,
      foto: formValue.foto,
    };
    dispatch(actionAddproductAsyn(obj));
    reset();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    FileUpload(file)
      .then((resp) => (formValue.foto = resp))
      .catch((err) => console.warn(err));
  };

  return (
    <div className="divAdd">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formPlaintextDesc">
          <Form.Label column sm="2">
            Descripcion
          </Form.Label>

          <Form.Control
            type="text"
            placeholder="Descripcion"
            name="des"
            value={formValue.des}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPlaintextImg">
          <Form.Label column sm="2">
            Imagen
          </Form.Label>

          <Form.Control
            type="file"
            name="foto"
            accept="*/jpg"
            placeholder="Ingrese Foto.jpg"
            onChange={handleFileChange}
          />
        </Form.Group>

        <Button type="submit">Publicar</Button>
      </Form>
    </div>
  );
};

export default Add;
