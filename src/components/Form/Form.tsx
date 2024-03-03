import { useNavigate } from 'react-router-dom';
import styles from './Form.module.css';
import BackButton from '../BackButton/BackButton';

function Form() {
    const navigate = useNavigate();

  return (
    <form action="#" className={styles.form}>
        <div className="form-group">
            <label htmlFor="city">City name</label>
            <input type="text" name="city" id="city"/>
        </div>

        <div className="form-group">
            <label htmlFor="date">When did you go to?</label>
            <input type="date" name="date" id="date"/>
        </div>

        <div className="form-group">
            <label htmlFor="notes">Notes</label>
            <textarea name="notes" id="notes"/>
        </div>
        <div className={styles.buttons}>
            <button className='cta'>Add</button>
            <BackButton />
        </div>
    </form>
  )
}

export default Form