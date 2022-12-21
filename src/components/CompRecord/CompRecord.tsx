import classNames from "classnames";
import { COMP_RECORD } from "../../../src/constants/dummydata";
import styles from "./CompRecord.module.css";

const CompRecord = () => {
  const winColor = { color: "green" };
  const lossColor = { color: "red" };
  return (
    <div className={styles.container}>
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
                <td style={result === 'W' ? winColor : lossColor}>{result}</td>
                <td>{method}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CompRecord;
