import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Button, Col, Collapse, Form, InputGroup, Row } from "react-bootstrap";
import useSWR from "swr";
import { API_URL } from "../constants";
import Icon from "./Icon";

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default function SearchBar({ name, category }) {
  const nameInput = useRef(null);
  const categoryInput = useRef(null);
  const router = useRouter();

  const nameChangeHandler = () => {
    let name = nameInput.current.value;
    name && router.push(`?name=${name}`);
  };

  const categoryChangeHandler = () => {
    let category = categoryInput.current.value;
    if (category == "All") {
      router.push("/");
    } else {
      router.push(`?category=${category}`);
    }
  };

  useEffect(() => {
    nameInput.current.value = name ? name : "";
    const children = [...categoryInput.current.children];
    if (category) {
      children.find((child) => child.value == category).selected = "true";
    }
  }, [name, category]);

  return (
    <Row className="justify-content-between align-items-center my-3">
      <Col md="6">
        <Form inline>
          <InputGroup>
            <Form.Control
              type="text"
              name="character_name"
              placeholder="Enter Character's Name..."
              ref={nameInput}
            />
            <InputGroup.Append>
              <Button variant="secondary" onClick={nameChangeHandler}>
                <Icon name="search" />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </Col>
      <Col md="6" className="mt-3 mt-md-0">
        <Form inline className="justify-content-end">
          <Form.Control
            as="select"
            ref={categoryInput}
            onChange={categoryChangeHandler}
          >
            <option>All</option>
            <option value="Breaking Bad">Breaking Bad</option>
            <option value="Better Call Saul">Better Call Saul</option>
          </Form.Control>
        </Form>
      </Col>
    </Row>
  );
}
