import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { actionAddperfilAsyn, actionListperfilAsyn } from "../Redux/actions/actionsPerfil";
import { FileUpload } from "../Helpers/FileUpload";

interface ProfileFormData {
  name: string;
  phone: string|number;
  genre: string;
  fotop: string;
}

const Perfil = () => {
  const dispatch = useDispatch();
  const [formValue, setFormValue]:any = useState<ProfileFormData>({
    name: "",
    phone: "",
    genre: "",
    fotop: "",
  });
 
  const perfilData = useSelector((store: any) => store.perfilStore);

  const estiloTexto = {
    fontSize: '1.2em', // Tamaño de fuente más grande
    fontStyle: 'italic' // Texto en cursiva
  };
  useEffect(() => {
    dispatch(actionListperfilAsyn());
    console.log(perfilData)
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(actionAddperfilAsyn(formValue));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      FileUpload(file)
        .then((resp) => {
          setFormValue({
            ...formValue,
            fotop: resp,
          });
        })
        .catch((err) => console.warn(err));
    }
  };

  return (
    <div className="divAdd">
      <h1>Bienvenido, actualiza tus datos</h1>
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
  <Form.Group className="mb-3" controlId="formPlaintextPhone">
    <Form.Label column sm="2">
      Numero Telefonico
    </Form.Label>
    <Form.Control
      type="text"
      placeholder="Numero telefónico"
      name="phone"
      value={formValue.phone}
      onChange={handleInputChange}
    />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formPlaintextGenre">
    <Form.Label column sm="2">
      Género
    </Form.Label>
    <Form.Control
      type="text"
      placeholder="Escribe tu género"
      name="genre"
      value={formValue.genre}
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
      accept="image/*"
      placeholder="Ingrese Foto.jpg"
      onChange={handleFileChange}
    />

  </Form.Group>
  <Button type="submit">Guardar</Button>
</Form>

<div>
<h1>Tu nombre es</h1>
<p style={estiloTexto}>{formValue.name}</p>
<h1>Tu Numero es</h1>
<p style={estiloTexto}>{formValue.phone}</p>
<h1>Tu genero es</h1>
<p style={estiloTexto}>{formValue.genre}</p>
<h2>Tu foto de perfil</h2>
<img style={{
  width: '130px',
}}src={formValue.fotop} />

</div>


    </div>
  );
};

export default Perfil;
