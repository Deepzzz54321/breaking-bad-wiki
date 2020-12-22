import { useRouter } from "next/router";
import NextLink from "next/link";
import { Pagination } from "react-bootstrap";

export default function PaginationBar() {
  const router = useRouter();

  let items = [];
  const active = parseInt(router.query.page) || 1;
  for (let number = 1; number <= 7; number++) {
    items.push(
      <NextLink key={number} href={`?page=${number}`}>
        <Pagination.Item
          key={number}
          active={number === active}
          href={`?page=${number}`}
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
