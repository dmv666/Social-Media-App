import React, { useEffect, useState } from "react";
import { Button, Card, CardGroup, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
    actionDeleteAmigosAsyn,
  actionAmigosAsyn,
} from "../Redux/actions/actionAmigos";
import EditProduct from "./EditProduct";
import styled from "styled-components";

const DivTable = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledCard = styled(Card)`
  width: 300px;
  height: 400px;
  margin: 10px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledCardGroup = styled(CardGroup)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledImg = styled(Card.Img)`
  width: 100%;
  height: 70%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const StyledCardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledCardFooter = styled(Card.Footer)`
  background-color: #ffffff;
`;


const Amigos = () => {
  const dispatch = useDispatch();
  const { amigos } = useSelector((store:any) => store.amigosStore);
  console.log(amigos);
  const [show, setShow] = useState(false);
  const [selectData, setSelectData]:any = useState();

  const handleClose = () => setShow(false);

  const handleShow = (p:any) => {
    setSelectData(p);
    setShow(true);
  };

  useEffect(() => {
    dispatch(actionAmigosAsyn());
  }, []);

  console.log(amigos);
  return (
    <div className="divTable" style={{
      
      display: 'flex',
      justifyContent: 'center',
    }}>
    <h1>Sociecitos</h1>
      <CardGroup>
        {amigos?.map((p:any) => (
              <Card
                style={{ width: "300px", height: "440px", textAlign: "center" }}
                key={p.id}
              >
                <Card.Body>
                  <Card.Title>{p.Name}</Card.Title>
                </Card.Body>

                <Button onClick={() => dispatch(actionDeleteAmigosAsyn(p.id))}>
                  X
                </Button>
        
              </Card>
            ))}
          </CardGroup>
    </div>
  );
};


export default Amigos;
