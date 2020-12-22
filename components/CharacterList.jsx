import { useRouter } from "next/router";
import useSWR from "swr";
import { Spinner } from "react-bootstrap";
import CharacterCard from "../components/CharacterCard";

const API_URL = "https://www.breakingbadapi.com/api/characters";

async function fetchData(url) {
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  return data;
}

export default function CharacterList() {
  const router = useRouter();
  const page = parseInt(router.query.page) || 1;
  const { data, error } = useSWR(
    `${API_URL}?limit=10&offset=${(page - 1) * 10}`,
    fetchData
  );
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 justify-content-around mx-3">
      {data ? (
        data
          .slice(0, 10)
          .map((char) => <CharacterCard key={char.char_id} {...char} />)
      ) : (
        <div className="text-center">
          <Spinner animation="border" variant="secondary" />
        </div>
      )}
    </div>
  );
}
