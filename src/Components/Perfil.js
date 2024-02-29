import React from "react";
import { useDispatch } from "react-redux";
import useForm from "../Hooks/useForm";
import { Button, Form } from "react-bootstrap";
import { actionAddperfilAsyn } from "../Redux/actions/actionsPerfil";
import { FileUpload } from "../Helpers/FileUpload";

const Perfil = () => {
  const dispatch = useDispatch();
  const [formValue, handleInputChange, reset] = useForm({
    name: "",
    fotop: " ",
  });

  console.log("Dentro del profile")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    let obj = {
      id: Math.floor(Math.random() * 200),
      name: formValue.name,
      fotop: formValue.fotop,
    };
    dispatch(actionAddperfilAsyn(obj));
    reset();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    FileUpload(file)
      .then((resp) => (formValue.fotop = resp))
      .catch((err) => console.warn(err));
  };

  return (
    <div className="divAdd">
          <h1> Bienvenido, aqui podras agregar tu nombre y una foto de perfil</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formPlaintextName">
          <Form.Label column sm="2">
            Nombre
          </Form.Label>

          <Form.Control
            type="text"
            placeholder="Nombre completo"
            name="name"
            value={formValue.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPlaintextImg">
          <Form.Label column sm="2">
            Foto de Perfil
          </Form.Label>

          <Form.Control
            type="file"
            name="fotop"
            accept="*/jpg"
            placeholder="Ingrese Foto.jpg"
            onChange={handleFileChange}
          />
        </Form.Group>

        <Button type="submit">Guardar</Button>
      </Form>
    </div>
  );
};

export default Perfil;
