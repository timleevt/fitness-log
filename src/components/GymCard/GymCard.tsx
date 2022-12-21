import styles from './GymCard.module.css';

type GymCard = {
  name: string;
  notes: string;
  loc: string;
  type?: string;
  website?: string;
};

const GymCard = ({ name, notes, loc, website }: GymCard) => {
  console.log(website);
  return (
    <div className={styles.container}>
        <div className={styles.gymImg}></div>
        <div className={styles.text}>
            <a href={website}>{name}</a>
            <div>{notes}</div>
        </div>
        <div className={styles.location}>{loc}</div>
    </div>
  );
};

export default GymCard;
