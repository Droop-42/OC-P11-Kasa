/* eslint-disable react/react-in-jsx-scope */
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useLocation } from "react-router-dom";

export default function Header() {
    //assigning location variable
    const location = useLocation();
    //destructuring pathname from location
    const { pathname } = location;

    return (
        <div className={styles.header}>
            <img src={logo} alt="Logo" height="60px" className={styles.logo}/>
            <nav>
                <Link to="/home" className={pathname.split("/")[1] === "home" ? styles.active : ""} >Accueil</Link>
                <Link to="/about" className={pathname.split("/")[1] === "about" ? styles.active : ""}>A Propos</Link>
            </nav>
        </div>      
    )
}