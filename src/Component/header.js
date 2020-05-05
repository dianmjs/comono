import React, { Fragment } from "react";
import { Navbar, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Fragment>
      <Navbar expand="lg" variant="dark" bg="info">
        <Container>
          <Navbar.Brand href="#">Tabla de Datos</Navbar.Brand>
        </Container>
      </Navbar>
    </Fragment>
  );
}
