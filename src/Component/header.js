import React, { Fragment } from "react";
import { Navbar, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Fragment>
      <Navbar expand="lg" variant="dark" bg="info">
        <Container>
          <Navbar.Brand href="#">Data Table</Navbar.Brand>
        </Container>
      </Navbar>
    </Fragment>
  );
}
