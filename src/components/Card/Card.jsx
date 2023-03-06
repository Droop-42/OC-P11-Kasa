/* eslint-disable react/react-in-jsx-scope */
import styles from './Card.module.css';
import img from "../../assets/accommodation-20-1.jpg";

// eslint-disable-next-line react/prop-types
export default function Card() {
    return (
        <div className={styles.card_min}>
            <img src={img} className={styles.card_min_img} />
            <span className={styles.card_min_txt}>test</span>
        </div>                 
    )
}