import { useRouter } from "next/router";
import useSWR from "swr";
import { API_URL } from "../constants";
import { Spinner } from "react-bootstrap";
import CharacterCard from "../components/CharacterCard";

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default function CharacterList() {
  const router = useRouter();
  const page = parseInt(router.query.page) || 1;
  const { data, error } = useSWR(
    `${API_URL}/characters?limit=10&offset=${(page - 1) * 10}`,
    fetchData
  );
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 justify-content-around mr-2">
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
