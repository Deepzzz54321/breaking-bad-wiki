import { useState } from "react";
import { Button, Col, Collapse, Form, Row } from "react-bootstrap";
import FilterOptions from "./FilterOptions";
import Icon from "./Icon";

export default function SearchBar() {
  const [collapseOpen, setCollapseOpen] = useState(false);

  return (
    <>
      <Row className=" align-items-center my-3">
        <Form className="w-100" inline>
          <Col xs="7" md="9" lg="10">
            <Form.Control
              type="text"
              name="character_name"
              placeholder="Ente Character's Name..."
              className="w-100"
            />
          </Col>
          <Col xs="5" md="3" lg="2">
            <Button variant="secondary" type="submit">
              <Icon name="search" />
            </Button>
            <Button
              variant="primary"
              type="button"
              className="ml-2"
              onClick={() => setCollapseOpen(!collapseOpen)}
              aria-controls="filter-options"
              aria-expanded={collapseOpen}
            >
              <Icon name="filter" />
            </Button>
          </Col>
        </Form>
      </Row>

      <Collapse in={collapseOpen}>
        <div id="filter-options">
          <FilterOptions />
        </div>
      </Collapse>
    </>
  );
}
