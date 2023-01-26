import styles from './AdminForm.module.css';

const AdminForm = () => {
    const handleSubmit = () => {
        console.log("TODO");
    }
    return (  
        <div className={styles.container}>
            <form className={styles.formContainer}action="">
                <label htmlFor="activity">Activity</label>
                <select name="activity" id="">
                    <option value="Gi BJJ">Gi BJJ</option>
                    <option value="No Gi">No Gi</option>
                    <option value="Weights">Weights</option>
                    <option value="Misc">Misc</option>
                </select>
                <label htmlFor="duration">Duration</label>
                <input type="time" name="duration" id="duration" />
                <label htmlFor="date"></label>
                <input type="date" name="date" id="date" />
                <label htmlFor="notes">Notes</label>
                <textarea name="notes" id="" cols={30} rows={10}></textarea>
                <button onClick={() => handleSubmit()}>Submit</button>
            </form>
        </div>
    );
}
 
export default AdminForm;