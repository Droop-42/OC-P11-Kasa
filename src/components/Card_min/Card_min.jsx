/* eslint-disable react/react-in-jsx-scope */
import styles from './Card_min.module.css';
import img from "../../assets/accommodation-20-1.jpg";

// eslint-disable-next-line react/prop-types
export default function Card_min({ titre }) {
    return (
        <div className={styles.card_min}>
            <img src={img} className={styles.card_min_img} />
            <span className={styles.card_min_txt}>{titre}</span>
        </div>                 
    )
}