import classNames from "classnames";
import { useState } from "react";
import GymCard from "../../components/GymCard/GymCard";
import { GYM_DATA } from "../../constants/dummydata";

import styles from "./GymsContainer.module.css";

const GymsContainer = () => {
  const data = GYM_DATA.sort((a, b) => b.id - a.id);
  const main = data.filter(
    (item) => item.type === "main" || item.type === "secondary"
  );
  const visited = data.filter(
    (item) => item.type !== "main" && item.type !== "secondary"
  );
  const [showMain, setShowMain] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.tab}>
        <a
          className={classNames({ [styles.active]: showMain === true })}
          onClick={() => setShowMain(true)}
        >
          Main
        </a>
        <a
          className={classNames({ [styles.active]: showMain === false })}
          onClick={() => setShowMain(false)}
        >
          Visited
        </a>
      </div>

      <ul className={styles.gymListContainer}>
        {showMain
          ? main.map((item) => (
              <li key={item.id} style={{ listStyle: "none" }}>
                <GymCard
                  name={item.name}
                  notes={item.notes}
                  loc={item.loc}
                  type={item.type}
                  website={item.website}
                />
              </li>
            ))
          : visited.map((item) => (
              <li key={item.id} style={{ listStyle: "none" }}>
                <GymCard
                  name={item.name}
                  notes={item.notes}
                  loc={item.loc}
                  type={item.type}
                  website={item.website}
                />
              </li>
            ))}
      </ul>
      {/* <p>maybe put a map with pins here</p> */}
      <p>
        being on this list is not an endorsement, it is purely a list of gyms I
        have visited or have trained at***
      </p>
    </div>
  );
};

export default GymsContainer;
