import ActivityCard from "../../components/ActivityCard/ActivityCard";
import styles from "./ActivityCardContainer.module.css";

import { DUMMY_ACTIVITY } from "../../constants/dummydata";

const ActivityCardContaier = ({}) => {
  // Temp until we have a proper api call
  const activity = DUMMY_ACTIVITY.sort((a, b) => b.id - a.id);

  return (
    <div className={styles.container}>
      {activity.map((item) => {
        return (
          <ActivityCard
            key={item.id}
            activityType={item.activity}
            date={item.date}
            duration={item.duration}
            notes={item.notes}
          />
        );
      })}
    </div>
  );
};

export default ActivityCardContaier;
