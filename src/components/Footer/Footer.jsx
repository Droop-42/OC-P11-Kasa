/* eslint-disable react/react-in-jsx-scope */
import styles from './Footer.module.css';
import logo from '../../assets/logo_white.svg';

export default function Footer() {
    return (
        <div className={styles.foot}>
             <img
                        src={logo}
                        alt="Logo"
                        height="30px"
                        //width="100px"
                        className={styles.footerLogo} 
                        />
             <div>© 2020 Kasa. All rights reserved</div> 
        </div>      
    )
}
