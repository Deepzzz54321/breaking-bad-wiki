import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <Container fluid className="mt-3 mt-md-4">
      <Header />
      {children}
    </Container>
  );
}
