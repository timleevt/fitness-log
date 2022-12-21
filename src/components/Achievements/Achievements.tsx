import styles from "./Achievements.module.css";

const Achievements = () => {
  return (
    <div className={styles.container}>
      <h2>Timeline / Achievements</h2>
      <ul>
        <li>Began training 2018</li>
        <li>
          Received my <span style={{color: '#A2D2FF'}}>blue belt</span> on 09/17/2021 from David Daniels & Abmar Barbosa
        </li>
      </ul>
    </div>
  );
};

export default Achievements;
