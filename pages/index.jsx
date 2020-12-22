import { Container } from "react-bootstrap";
import CharacterList from "../components/CharacterList";
import Header from "../components/Header";
import Layout from "../components/Layout";
import PaginationBar from "../components/PaginationBar";
import SearchBar from "../components/SearchBar";

export default function Home({ data }) {
  return (
    <Layout>
      <SearchBar />
      <CharacterList />
    </Layout>
  );
}
