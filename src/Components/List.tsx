import React, { useEffect, useState } from "react";
import { Button, Card, CardGroup, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  actionDeleteProductAsyn,
  actionListproductAsyn,
} from "../Redux/actions/actionsProduct";
import EditProduct from "./EditProduct";

const List = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store:any) => store.productsStore);
  console.log(products);
  const [show, setShow] = useState(false);
  const [selectData, setSelectData]:any = useState();

  const handleClose = () => setShow(false);

  const handleShow = (p:any) => {
    setSelectData(p);
    setShow(true);
  };

  useEffect(() => {
    dispatch(actionListproductAsyn());
  }, []);

  console.log(products);
  return (
    <div className="divTable" style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <CardGroup>
        {products?.map((p:any) => (
              <Card
                style={{ width: "300px", height: "440px", textAlign: "center" }}
                key={p.id}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <Card.Img
                    variant=""
                    src={p.foto}
                    style={{ width: "560px", height: "370px" }}
                  />
                </div>

                <Card.Body>
                  {/* <Card.Title>{p.name}</Card.Title> */}
                  <Card.Text>{p.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button>Agregar</Button>
                </Card.Footer>
              </Card>
            ))}
          </CardGroup>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar {selectData?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {show && selectData !== "undefined" && (
            <EditProduct datos={selectData} handleClose={handleClose} />
          )}
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    </div>
  );
};

export default List;