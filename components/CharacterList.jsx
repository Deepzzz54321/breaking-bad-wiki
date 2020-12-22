import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { API_URL } from "../constants";
import { Spinner } from "react-bootstrap";
import CharacterCard from "./CharacterCard";
import PaginationBar from "./PaginationBar";
import ErrorMessage from "./ErrorMessage";
import SearchBar from "./SearchBar";

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default function CharacterList() {
  const router = useRouter();
  const page = parseInt(router.query.page) || 1;
  const { data, error: fetchError } = useSWR(
    `${API_URL}/characters?limit=10&offset=${(page - 1) * 10}`,
    fetchData
  );
  const [characters, setCharacters] = useState(data);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCharacters(data);
    setError(fetchError);
  }, [data, fetchError]);

  if (characters) {
    return (
      <>
        <SearchBar setCharacters={setCharacters} setError={setError} />
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 justify-content-around mr-xl-2">
          {characters.slice(0, 10).map((char) => (
            <CharacterCard key={char.char_id} {...char} />
          ))}
        </div>
        {characters == data && <PaginationBar />}
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
        <div className="text-center">
          <Spinner animation="border" variant="secondary" />
        </div>
      );
    }
  }
}
