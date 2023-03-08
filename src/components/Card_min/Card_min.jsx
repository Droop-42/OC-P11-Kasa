/* eslint-disable react/react-in-jsx-scope */
import styles from './Card_min.module.css';
import img from "../../assets/accommodation-20-1.jpg";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Card_min({ titre, id }) {
    const navigate= useNavigate()

    function navigateToCard(id) {
    console.log("/Card/"+id)
      navigate("/Card/"+id)  }
    return (
        <div className={styles.card_min} onClick={() => navigateToCard(id) }>
            <img src={img} className={styles.card_min_img} />
            <span className={styles.card_min_txt}>{titre}</span>
        </div>                 
    )
}