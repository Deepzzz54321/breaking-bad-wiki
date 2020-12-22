import { Container } from "react-bootstrap";
import CharacterCard from "../components/CharacterCard";
import SearchBar from "../components/SearchBar";

const API_URL = "https://www.breakingbadapi.com/api/characters";

export async function getServerSideProps() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <Container fluid>
      <div className="head mt-3 mt-md-4">
        <h2 className="text-primary">World of Breaking Bad</h2>
        <div className="border-top border-light"></div>
        <SearchBar />
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 justify-content-around mx-3">
          {data.map((char) => (
            <CharacterCard {...char} />
          ))}
          <CharacterCard />
        </div>
      </div>
    </Container>
  );
}
