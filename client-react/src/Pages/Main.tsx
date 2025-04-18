import React, { useState, useContext } from "react";
import RegistrationForm from "../Components/RegistrationForm";
import AuthForm from "../Components/AuthForm";
import { useGlobalContext } from "../Context/Global";
import { Pages } from "../Context/Global";
import {
  Button,
  Form,
  Container,
  Alert,
  Row,
  Col,
  Card,
} from "react-bootstrap";


export default function MainPage() {
  const [form, setForm] = useState(true);

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Card style={{ width: "25rem" }} className="m-2 p-2">
              <Card.Body>
                {form?<AuthForm />:<RegistrationForm/>}
                
                <Button onClick={() => setForm(!form)}>
                  {form?"Регистрация":"У меня уже есть кабинет"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
