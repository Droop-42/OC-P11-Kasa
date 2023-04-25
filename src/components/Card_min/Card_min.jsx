/* eslint-disable react/react-in-jsx-scope */
import styles from './Card_min.module.css';
//import img from "../../assets/accommodation-20-1.jpg";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Card_min({ titre, id, cover }) {
    const navigate= useNavigate()

    function navigateToCard(id) {
      navigate("/card/"+id)  }
    return (
        <div className={styles.card_min} onClick={() => navigateToCard(id) }>
            <img src={cover} className={styles.card_min_img} />
            <div className={styles.card_min_txt_container}><span className={styles.card_min_txt}>{titre}</span></div>
        </div>                 
    )
}