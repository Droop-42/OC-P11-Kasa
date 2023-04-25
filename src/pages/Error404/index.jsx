/* eslint-disable react/react-in-jsx-scope */
import styles from './Error404.module.css'
import { Link } from 'react-router-dom';

export default function Error404() {
    return (
        <div className={styles.errorPage}>
             <p className={styles.number}>404</p>
             <h1 className={styles.message}>Oups! La page que vous demandez n&apos;existe pas.</h1> 
             <Link to="/home" className={styles.link}>Retourner sur la page d’accueil</Link> 
        </div>      
    )
}