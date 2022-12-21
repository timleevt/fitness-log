import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [show, setShow] = useState(false);
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
    setShow(true);
  };

  // Currently bugged. If you mouse over the text it will call this repeatedly
  const handleMouseLeave = () => {
    setShow(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <div
          className={styles.bgImgCard}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseOut={() => handleMouseLeave()}
        />
        <div
          className={styles.bgImgCard}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseOut={() => handleMouseLeave()}
        />
        <div
          className={styles.bgImgCard}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseOut={() => handleMouseLeave()}
        />
        <div
          className={styles.bgImgCard}
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseOut={() => handleMouseLeave()}
        />
        {show && <div className={styles.hoverTxt}>{text}</div> }
      </div>
      <p>personal training log / activity tracker</p>
      <a href="https://timleevt.github.io" target="_blank" rel="noreferrer">
        timleevt.github.io
      </a>
    </div>
  );
}
