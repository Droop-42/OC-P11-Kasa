/* eslint-disable react/react-in-jsx-scope */
import img from '../../assets/ocean.png';
import Card_min_list from '../../components/Card_min_list';
import styles from './Home.module.css';

export default function Home() {
    return (
        <div className={styles.page}>
             <img src={img} height="223px" width="90%" />
             <p>Chez vous, partout et ailleurs</p>
             <div className={styles.locations} >
                 <Card_min_list />
             </div>
        </div>      
    )
}