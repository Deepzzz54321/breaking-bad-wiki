import ErrorMessage from "../components/ErrorMessage";
import Layout from "../components/Layout";

export default function Error404() {
  return (
    <Layout>
      <ErrorMessage
        code={404}
        message="Uh Oh! This page could be not be found!"
      />
    </Layout>
  );
}
