import { useEffect, useState } from "react";
import { Button, Col, Collapse, Form, Row } from "react-bootstrap";
import useSWR from "swr";
import { API_URL } from "../constants";
import Icon from "./Icon";

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default function SearchBar({ setCharacters, setError }) {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [name, setName] = useState(null);
  const [category, setCategory] = useState(null);
  const { data: nameData, error: nameError } = useSWR(
    name ? `${API_URL}/characters?name=${name}` : null,
    fetchData
  );
  const { data: categoryData, error: categoryError } = useSWR(
    name ? `${API_URL}/characters?name=${name}` : null,
    fetchData
  );

  useEffect(() => {
    nameData && nameData.length > 0 && setCharacters(nameData);
    setError(nameError);
  }, [nameData, nameError]);
  console.log({ name, nameData, nameError });
  // useEffect(() => {}, [category]);
  // const { data, error } = useSWR(
  //   `${API_URL}/characters?limit=10&offset=${(page - 1) * 10}`,
  //   fetchData
  // );

  const submitHandler = (event) => {
    event.preventDefault();
    const name = event.target.character_name.value;
    name && setName(name) && setCategory(null);
  };

  return (
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
  );
}
