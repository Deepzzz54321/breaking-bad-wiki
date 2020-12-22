import { useRouter } from "next/router";
import NextLink from "next/link";
import { Pagination } from "react-bootstrap";

export default function PaginationBar({ category = "" }) {
  const router = useRouter();

  let items = [],
    count;
  const active = parseInt(router.query.page) || 1;
  if (category == "Breaking Bad") {
    count = 57;
  } else if (category == "Better Call Saul") {
    count = 12;
  } else {
    count = 63;
  }
  const pages_count = count % 10 == 0 ? count / 10 : count / 10 + 1;
  for (let number = 1; number <= pages_count; number++) {
    items.push(
      <NextLink
        key={number}
        href={
          category ? `?category=${category}&page=${number}` : `?page=${number}`
        }
      >
        <Pagination.Item
          key={number}
          active={number === active}
          href={
            category
              ? `?category=${category}&page=${number}`
              : `?page=${number}`
          }
        >
          {number}
        </Pagination.Item>
      </NextLink>
    );
  }

  return (
    <div className="d-flex justify-content-center mt-4">
      <Pagination>{items}</Pagination>
    </div>
  );
}
