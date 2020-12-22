import { Container } from "react-bootstrap";
import CharacterList from "../components/CharacterList";
import PaginationBar from "../components/PaginationBar";
import SearchBar from "../components/SearchBar";

export default function Home({ data }) {
  return (
    <Container fluid>
      <div className="head mt-3 mt-md-4">
        <h2 className="text-primary">World of Breaking Bad</h2>
        <div className="border-top border-light"></div>
        <SearchBar />
      </div>
      <CharacterList />
      <PaginationBar />
    </Container>
  );
}
