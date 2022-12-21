import { COMP_RECORD } from "../src/constants/dummydata";

const achievements = () => {
  return (
    <div>
      <h2>Achievements</h2>
      <ul>
        <li>Began training 2018</li>
        <li>
          Received my blue belt on 09/17/2021 from David Daniels & Abmar Barbosa
        </li>
      </ul>
      <h2>Competition Record</h2>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Division</th>
            <th>Weight Class</th>
            <th>Wt.</th>
            <th>Result</th>
            <th>Method</th>
          </tr>
          {COMP_RECORD.map(
            ({
              id,
              date,
              name,
              division,
              weightClass,
              weight,
              result,
              method,
            }) => (
              <tr key={id}>
                <td>{date}</td>
                <td>{name}</td>
                <td>{division}</td>
                <td>{weightClass}</td>
                <td>{weight}</td>
                <td>{result}</td>
                <td>{method}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default achievements;
