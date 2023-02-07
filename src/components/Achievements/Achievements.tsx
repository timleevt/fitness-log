import styles from "./Achievements.module.css";

const Achievements = () => {
  return (
    <div className={styles.container}>
      <h2>Timeline / Achievements</h2>
      <ul>
        <li>2018 - Began training</li>
        <li>
          09/17/2021 - Received my <span style={{color: '#A2D2FF'}}>blue belt</span> from David Daniels & Abmar Barbosa
        </li>
      </ul>
    </div>
  );
};

export default Achievements;
