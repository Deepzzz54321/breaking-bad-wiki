import Link from "next/link";

export default function Header() {
  return (
    <div className="head mb-3">
      <Link href="/">
        <a className="text-decoration-none">
          <h2 className="text-primary d-inline-block">World of Breaking Bad</h2>
        </a>
      </Link>
      <div className="border-top border-light"></div>
    </div>
  );
}
