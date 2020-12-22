import { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import Icon from "./Icon";

export default function SearchBar() {
  return (
    <>
      <Row className="justify-content-between align-items-center my-3">
        <Col md="6">
          <Form inline>
            <InputGroup>
              <Form.Control
                type="text"
                name="character_name"
                placeholder="Enter Character's Name..."
              />
              <InputGroup.Append>
                <Button variant="secondary">
                  <Icon name="search" />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </Col>
        <Col md="6" className="mt-3 mt-md-0">
          <Form inline className="justify-content-end">
            <Form.Control as="select">
              <option>All</option>
              <option value="Breaking Bad">Breaking Bad</option>
              <option value="Better Call Saul">Better Call Saul</option>
            </Form.Control>
          </Form>
        </Col>
      </Row>
    </>
  );
}
