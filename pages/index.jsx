import CharacterList from "../components/CharacterList";
import Layout from "../components/Layout";

export default function Home({ data }) {
  return (
    <Layout>
      <CharacterList />
    </Layout>
  );
}
