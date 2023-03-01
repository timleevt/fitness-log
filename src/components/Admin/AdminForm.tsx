import styles from "./AdminForm.module.css";
import { postActivity } from "../../../pages/api/activity/postActivity";
import { useState } from "react";

const AdminForm = () => {
  const [activity, setActivity] = useState("Gi BJJ");
  const [duration, setDuration] = useState(1);
  const [date, setDate] = useState("2023-03-21");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    postActivity(activity, date, duration, notes);
  };
  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="activity">Activity</label>
        <select
          name="activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        >
          <option value="Gi BJJ">Gi BJJ</option>
          <option value="No Gi">No Gi</option>
          <option value="Weights">Weights</option>
          <option value="Misc">Misc</option>
        </select>
        <label htmlFor="duration">Duration</label>
        <input
          type="number"
          name="duration"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.valueAsNumber)}
        />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="notes">Notes</label>
        <textarea
          name="notes"
          cols={30}
          rows={10}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AdminForm;
