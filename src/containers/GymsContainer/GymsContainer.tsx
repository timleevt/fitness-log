import classNames from "classnames";
import { useState } from "react";
import GymCard from "../../components/GymCard/GymCard";
import { useFetchGyms } from "../../../pages/api/gyms/fetchGyms";
import { GYM_DATA } from "../../constants/dummydata";

import styles from "./GymsContainer.module.css";

const GymsContainer = () => {
  const [showMain, setShowMain] = useState(true);

  const { data: gyms } = useFetchGyms();

  let main = gyms?.data.filter(
    (item) => item.type === "main" || item.type === "secondary"
  );
  let visited = gyms?.data.filter(
    (item) => item.type !== "main" && item.type !== "secondary"
  );

  // Can delete once I get real backend working
  let static_sorted = GYM_DATA.sort((a, b) => b.id - a.id);
  let static_main = static_sorted.filter(
    (item) => item.type === "main" || item.type === "secondary"
  );
  let static_visited = static_sorted.filter(
    (item) => item.type !== "main" && item.type !== "secondary"
  );
  // end temp

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
          ? main?.map((item) => (
              <li key={item.id} style={{ listStyle: "none" }}>
                <GymCard
                  name={item.name}
                  notes={item.notes}
                  loc={item.location}
                  type={item.type}
                  website={item.website}
                />
              </li>
            ))
          : visited?.map((item) => (
              <li key={item.id} style={{ listStyle: "none" }}>
                <GymCard
                  name={item.name}
                  notes={item.notes}
                  loc={item.location}
                  type={item.type}
                  website={item.website}
                />
              </li>
            ))}

        {/* Temporary just for static site */}
        {showMain &&
          !main &&
          static_main?.map((item) => (
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
        {!visited &&
          static_visited?.map((item) => (
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
        {/* End Temp Showcase */}
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
