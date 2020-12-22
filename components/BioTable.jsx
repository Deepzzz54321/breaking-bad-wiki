import { Table } from "react-bootstrap";
import LifeStatus from "./LifeStatus";

export default function BioTable({ character }) {
  return (
    <Table borderless>
      <tbody>
        <tr>
          <th>Name</th>
          <td>{character.name}</td>
        </tr>
        <tr>
          <th>Nickname</th>
          <td>{character.nickname}</td>
        </tr>
        <tr>
          <th>Status</th>
          <td>
            <LifeStatus status={character.status} />
          </td>
        </tr>
        <tr>
          <th>Date of Birth</th>
          <td>{character.birthday}</td>
        </tr>
        {character.occupation.length > 1 ? (
          <>
            <tr>
              <th colSpan={2}>Occupation</th>
            </tr>
            <tr>
              <td colSpan={2}>
                <ul>
                  {character.occupation.map((ocp, index) => (
                    <li key={index}>{ocp}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </>
        ) : (
          <tr>
            <th>Occupation</th>
            <td>{character.occupation[0]}</td>
          </tr>
        )}
        <tr>
          <th>Season Appearances</th>
          <td>{character.appearance && character.appearance.join(", ")}</td>
        </tr>
        <tr>
          <th>Portrayed By</th>
          <td>{character.portrayed}</td>
        </tr>
      </tbody>
    </Table>
  );
}
