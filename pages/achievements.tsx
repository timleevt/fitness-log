import Achievements from "../src/components/Achievements/Achievements";
import CompRecord from "../src/components/CompRecord/CompRecord";
import styles from "../styles/Achievements.module.css";

const achievements = () => {
  return (
    <div className={styles.container}>
        <Achievements />
        <CompRecord />
    </div>
  );
};

export default achievements;
