import { Container } from "react-bootstrap";
import CharacterList from "../components/CharacterList";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import { CharactersProvider } from "../context/CharactersContext";

export default function Home({ data }) {
  return (
    <Layout>
      <CharactersProvider>
        <CharacterList />
      </CharactersProvider>
    </Layout>
  );
}
