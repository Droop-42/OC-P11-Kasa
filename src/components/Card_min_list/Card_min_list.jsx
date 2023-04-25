/* eslint-disable react/react-in-jsx-scope */

import { logements_list } from '../../datas/logements_list'
import styles from './Card_min_list.module.css';
import Card_min from '../Card_min';


export default function Card_min_list() {
    

    return (
        <div className={styles.cardList}>
            {logements_list.map(({id, title, cover}) =>
                <div key={id} >
                    <Card_min 
                        cover={cover}
                        titre={title}
                        id={id}  
                    />
                </div>    
            )}
        </div>     
    )
}
