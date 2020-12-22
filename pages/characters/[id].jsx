import { useRouter } from "next/router";
import useSWR from "swr";
import { API_URL } from "../../constants";
import { Container, Spinner } from "react-bootstrap";

async function fetchData(character_url, quote_url) {
  let response = await fetch(character_url);
  const data = await response.json();
  const character = data[0];
  response = await fetch(`${quote_url}?author=${character.name}`);
  const quotes = await response.json();
  return { character, quotes };
}

export default function CharacterPage() {
  const router = useRouter();
  const char_id = parseInt(router.query.id) || 0;
  const { data, error } = useSWR(
    [`${API_URL}/characters/${char_id}`, `${API_URL}/quote`],
    fetchData
  );
  if (data && data.character && data.quotes && !error) {
    return (
      <Container fluid className="mt-3">
        <div className="bg-dark p-3 rounded-lg">
          <div className="row justify-content-around">
            <div className="col-md">
              <img
                src={data.character.img}
                alt={data.character.name}
                style={{ maxHeight: "90vh", maxWidth: "100%" }}
              />
            </div>
            <div className="col-md"></div>
          </div>
        </div>
      </Container>
    );
  } else if (error) {
    return <h1 className="text-secondary">500 - Server Error</h1>;
  } else {
    return (
      <Container fluid className="text-center mt-5">
        <Spinner animation="border" variant="secondary" />
      </Container>
    );
  }
}
