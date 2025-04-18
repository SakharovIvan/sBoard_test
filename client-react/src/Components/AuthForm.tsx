import React, { useState, useContext } from "react";
import {
  Button,
  Form,
  Card,
} from "react-bootstrap";
import authService from "../services/auth.service";
export default function AuthForm() {
  const [FormData, setFormData] = useState({
    email: "",
    password: "",
    checkForm: false,
  });

  return (
    <>
      <Card.Title>Авторизация</Card.Title>

        <Form.Label>Email адрес</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          onChange={(e) => setFormData({ ...FormData, email: e.target.value })}
        />
        <Form.Label>Пароль</Form.Label>
        <Form.Control
          type="password"
          placeholder="******"
          onChange={(e) => setFormData({ ...FormData, password: e.target.value })}
        />
        <Button className='m-2' onClick={async () => {authService.login(FormData)}}>Войти</Button>

    </>
  );
}
