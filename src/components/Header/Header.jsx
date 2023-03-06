/* eslint-disable react/react-in-jsx-scope */
import styles from './Header.module.css';
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg';

export default function Header() {
    return (
        <div className={styles.header}>
            <img
                        src={logo}
                        alt="Logo"
                        height="60px"
                        //width="100px" 
                        />

            <nav>
                <Link to="/Home">Accueil</Link>
                <Link to="/About">A propos</Link>
            </nav>
        </div>      
    )
}