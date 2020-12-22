export default function CharacterCard({
  name,
  birthday,
  occupation,
  img,
  status,
}) {
  return (
    <div className="col p-3">
      <div className="bg-dark p-3 rounded-lg h-100">
        <div className="text-center">
          <img
            src={img}
            alt="Walter White"
            style={{ height: "300px", width: "auto", maxWidth: "100%" }}
          />
        </div>
        <h5 className="mt-2 text-primary">{name}</h5>
        <p className="text-secondary">
          <em>{occupation && occupation.join(", ")}</em>
        </p>
        <p className="mb-0">
          Status: <em className="text-danger"> {status}</em>
        </p>
        <p className="mb-0">
          Date of Birth: <em className="text-light"> {birthday}</em>
        </p>
      </div>
    </div>
  );
}
