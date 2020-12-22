export default function ErrorMessage({ code, message }) {
  return (
    <div className="my-5 d-flex justify-content-center align-items-center">
      <img
        src="/images/walter-logo.png"
        alt="Walter White"
        style={{ height: "8rem", width: "auto" }}
      />
      <div className="border-left border-secondary p-3 ml-3">
        <h5 className="text-danger">Error {code}</h5>
        {message}
      </div>
    </div>
  );
}
