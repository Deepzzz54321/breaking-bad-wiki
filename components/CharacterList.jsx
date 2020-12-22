import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { API_URL } from "../constants";
import { Spinner } from "react-bootstrap";
import CharacterCard from "./CharacterCard";
import PaginationBar from "./PaginationBar";
import ErrorMessage from "./ErrorMessage";
import SearchBar from "./SearchBar";

async function fetchData(page, name, category) {
  let url;
  if (name) {
    url = `${API_URL}/characters?name=${name}`;
  } else if (category) {
    url = `${API_URL}/characters?category=${category}&limit=10&offset=${
      (page - 1) * 10
    }`;
  } else {
    url = `${API_URL}/characters?limit=10&offset=${(page - 1) * 10}`;
  }
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default function CharacterList() {
  const router = useRouter();
  const page = parseInt(router.query.page) || 1;
  const name = router.query.name;
  const category = router.query.category;
  const { data, error } = useSWR([page, name, category], fetchData);

  if (data) {
    return (
      <>
        <SearchBar />
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 justify-content-around mr-xl-2">
          {data.map((char) => (
            <CharacterCard key={char.char_id} {...char} />
          ))}
        </div>
        {page && !name ? <PaginationBar category={category} /> : null}
      </>
    );
  } else {
    if (error) {
      return (
        <ErrorMessage
          code={500}
          message="Oops! The requested resource cannot be found!"
        />
      );
    } else {
      return (
        <div className="text-center mt-4">
          <Spinner animation="border" variant="secondary" />
        </div>
      );
    }
  }
}
