import { useEffect, useState } from "react";
import { Button, Col, Collapse, Form, Row } from "react-bootstrap";
import useSWR from "swr";
import { API_URL } from "../constants";
import FilterOptions from "./FilterOptions";
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
    <>
      <Row className="align-items-center my-3">
        <Form className="w-100" inline onSubmit={submitHandler}>
          <Col xs="7" md="9" lg="10">
            <Form.Control
              type="text"
              name="character_name"
              placeholder="Enter Character's Name..."
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
