import Link from "next/link";

export default function Header() {
  return (
    <div className="head">
      <div className="d-flex justify-content-between">
        <Link href="/">
          <a className="text-decoration-none">
            <h2 className="text-primary d-inline-block">
              World of Breaking Bad
            </h2>
          </a>
        </Link>
        <div className="align-self-end mb-2 d-none d-md-inline">
          From
          <a
            href="https://www.linkedin.com/in/eswar-clynn"
            className="text-decoration-none ml-2"
          >
            Eswar Clynn
          </a>
        </div>
      </div>
      <div className="border-top border-light"></div>
    </div>
  );
}
