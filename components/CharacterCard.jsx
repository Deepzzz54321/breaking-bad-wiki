import { useRouter } from "next/router";
import LifeStatus from "./LifeStatus";

export default function CharacterCard({
  char_id,
  name,
  birthday,
  occupation,
  img,
  status,
}) {
  const router = useRouter();
  const redirectHandler = () => {
    router.push(`/characters/${char_id}`);
  };

  return (
    <div className="col p-3">
      <div
        className="character-card bg-dark p-3 rounded-lg h-100"
        onClick={redirectHandler}
      >
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
          Status:
          <em className="text-danger">
            <LifeStatus status={status} />
          </em>
        </p>
        <p className="mb-0">
          Date of Birth: <em className="text-light"> {birthday}</em>
        </p>
      </div>
    </div>
  );
}
