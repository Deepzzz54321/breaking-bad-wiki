import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <Container fluid className="my-3 my-md-4">
      <Header />
      {children}
    </Container>
  );
}
