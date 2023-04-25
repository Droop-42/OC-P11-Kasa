/* eslint-disable react/react-in-jsx-scope */
import img from '../../assets/ocean.png';
import Card_min_list from '../../components/Card_min_list';
import styles from './Home.module.css';

export default function Home() {
    return (
        <div className={styles.page}>
             <img src={img} className={styles.homeImg} />
             <p className={styles.homeTitle}>Chez vous, partout et ailleurs</p>
             <div className={styles.locations} >
                 <Card_min_list />
             </div>
        </div>      
    )
}