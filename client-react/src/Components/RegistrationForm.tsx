import React, { useState, useContext } from "react";
import {
  Button,
  Form,
  Card,
  Alert
} from "react-bootstrap";
import authService from "../services/auth.service";


export default function RegistrationForm() {
  const [FormData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    checkForm: false,
  });

  return (
    <>
      <Card.Body>
        <Card.Title>Регистрация</Card.Title>
          <Form.Label>Email адрес</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setFormData({ ...FormData, email: e.target.value })
            }
          />
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            type="password"
            placeholder="******"
            onChange={(e) =>
              setFormData({ ...FormData, email: e.target.value })
            }
          />
          <Form.Label>Наименвоание пользователя</Form.Label>
          <Form.Control
            type="name"
            placeholder="Логин"
            onChange={(e) =>
              setFormData({ ...FormData, email: e.target.value })
            }
          />
          <Button className='m-2' onClick={async () => {authService.registration(FormData)}}>Зарегистрироваться</Button>
      </Card.Body>
    </>
  );
}
