import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [text, setText] = useState("");
  const handleMouseEnter = (position: number) => {
    if (position === 1) {
      setText("Tim Lee / Age 29");
    } else if (position === 2) {
      setText("current rank: blue belt");
    } else if (position === 3) {
      setText("current team: carpe diem");
    } else if (position === 4) {
      setText("favorite technique/position: open guard / berimbolo");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer} onMouseLeave={() => setText("")}>      
        <div
          className={styles.bgImgCard}
          onMouseEnter={() => handleMouseEnter(1)}
        />
        <div
          className={styles.bgImgCard}
          onMouseEnter={() => handleMouseEnter(2)}
        />
        <div
          className={styles.bgImgCard}
          onMouseEnter={() => handleMouseEnter(3)}
        />
        <div
          className={styles.bgImgCard}
          onMouseEnter={() => handleMouseEnter(4)}
        />
        <div className={styles.hoverTxt}>{text}</div>
      </div>
      <p>personal training log / activity tracker</p>
    </div>
  );
}
