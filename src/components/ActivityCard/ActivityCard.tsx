import styles from "./ActivtyCard.module.css";

type Props = {
  activityType: string;
  date: string;
  duration?: number;
  notes?: string;
};

const AcitivtyCard = ({ activityType, date, duration, notes }: Props) => {
  // Need to find a better way to do this
  let style;
  if (activityType === "Gi BJJ") {
    style = { backgroundColor: "#2196f3" };
  } else if (activityType === "No Gi") {
    style = { backgroundColor: "#673ab7" };
  } else if (activityType === "Weight Training") {
    style = { backgroundColor: "#9e9e9e" };
  } else {
    style = { backgroundColor: "#009688" };
  }

  return (
    <div className={styles.container} style={style}>
      <div className={styles.activityTypeHeader}>
        <div>{activityType}</div>
        <div>{date}</div>
      </div>
      {duration && <div>{duration}HR(s)</div>}
      <div className={styles.notes}>{notes}</div>
    </div>
  );
};

export default AcitivtyCard;
