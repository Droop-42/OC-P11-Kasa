/* eslint-disable react/react-in-jsx-scope */

import { logements_list } from '../../datas/logements_list'
import styles from './Card_min_list.module.css';
import Card_min from '../Card_min';
import { useNavigate } from "react-router-dom";

export default function Card_min_list() {
    const navigate= useNavigate()

    function navigateToHome() {
    console.log('error')
      navigate("/Card")  }

    return (
        <div className={styles.cardList}>
            {logements_list.map(({id, title}) =>
            <div key={id} onClick={navigateToHome}>
                <Card_min 
                    //cover={cover}
                    titre={title}  
                />
            </div>
                
            )}
        </div>     
    )
}
