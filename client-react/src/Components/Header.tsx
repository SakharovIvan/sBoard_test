import React, { useState, useContext, useEffect } from "react";
import { Button, Container, Form, Nav, Navbar, Badge } from "react-bootstrap";
import { useGlobalContext } from "../Context/Global";
import { Pages } from "../Context/Global";

export default function Header() {
  const { setPage } = useGlobalContext();

  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="sm"
        bg="dark"
        variant="underline"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
        
                style={{ color: "white" }}
                onClick={() => {
                    setPage(Pages.Main)}}
              >
                Главная
              </Nav.Link>
              <Nav.Link
                style={{ color: "white" }}
                onClick={() => setPage(Pages.Upload)}
              >
                Загрузка изображений
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
