import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import useSWR from "swr";
import { API_URL } from "../constants";

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export const CharactersContext = createContext();

// This context provider is passed to any component requiring the context
export const CharactersProvider = ({ children }) => {
  const router = useRouter();
  const page = parseInt(router.query.page) || 1;
  const { data, error } = useSWR(
    `${API_URL}/characters?limit=10&offset=${(page - 1) * 10}`,
    fetchData
  );
  const [characters, setCharacters] = useState(data);
  const [filtered, setFiltered] = useState(false);
  const [name, setName] = useState(null);
  const [category, setCategory] = useState(null);

  const { data: nameData, error: nameError } = useSWR(
    name ? `${API_URL}/characters?name=${name}` : null,
    fetchData
  );
  // const { data: categoryData, error: categoryError } = useSWR(
  //   name ? `${API_URL}/characters?category=${name}` : null,
  //   fetchData
  // );

  useEffect(() => {
    setCharacters(data);
    setFiltered(false);
  }, [data]);

  useEffect(() => {
    if (name) {
      setCharacters(nameData);
      setFiltered(true);
    } else {
      setCharacters(data);
      setFiltered(false);
    }
  }, [nameData]);

  useEffect(() => {
    if (name) {
      setCharacters(nameData);
      setFiltered(true);
    } else {
      setCharacters(data);
      setFiltered(false);
    }
  }, [nameData]);

  return (
    <CharactersContext.Provider
      value={{
        characters,
        error,
        filtered,
        setCharacters,
        setName,
        setCategory,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
