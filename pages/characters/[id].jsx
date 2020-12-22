import { useRouter } from "next/router";
import useSWR from "swr";
import { API_URL } from "../../constants";
import { Container, Spinner, Table } from "react-bootstrap";
import Layout from "../../components/Layout";
import BioTable from "../../components/BioTable";
import Quotes from "../../components/Quotes";
import ErrorMessage from "../../components/ErrorMessage";

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
    const { character, quotes } = data;
    return (
      <Layout>
        <Container className="px-0">
          <div className="bg-dark p-3 rounded-lg mt-3">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg text-center">
                <img
                  src={character.img}
                  alt={character.name}
                  style={{ maxHeight: "75vh", maxWidth: "100%" }}
                />
              </div>
              <div className="col-md-6 col-lg mt-3 mt-md-0">
                <h3 className="text-primary">{character.name}</h3>
                {character.nickname && (
                  <h5 className="text-secondary">AKA {character.nickname}</h5>
                )}
                <BioTable character={character} />
              </div>
              {quotes && quotes.length > 0 && (
                <div className="col-md-12 col-lg mt-3 mt-md-0">
                  <Quotes quotes={quotes} />
                </div>
              )}
            </div>
          </div>
        </Container>
      </Layout>
    );
  } else if (error) {
    return (
      <Layout>
        <ErrorMessage
          code={500}
          message="Oops! The requested resource cannot be found!"
        />
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className="my-4 text-center">
          <Spinner animation="border" variant="secondary" />
        </div>
      </Layout>
    );
  }
}
