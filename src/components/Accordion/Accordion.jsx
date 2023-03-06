/* eslint-disable react/react-in-jsx-scope */
import styles from './Accordion.module.css';
import logo_down from '../../assets/expand_more_FILL0_wght400_GRAD0_opsz40.svg';
import logo_up from '../../assets/expand_less_FILL0_wght400_GRAD0_opsz40.svg';
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export default function Accordion({ Titre, Expand }) {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className={styles.accordion}>
            <div className={styles.title}>
                <span className={styles.txtTitle}>
                    {Titre}                
                </span>
                <img src={logo_up} alt="Logo" onClick={() => setIsOpen(false)}/>            
            </div> 
            <div className={styles.expand}>
                {Expand}
            </div>   
        </div>                       
    ) :  (
        <div className={styles.accordion}>
            <div className={styles.title}>
                <span className={styles.txtTitle}>
                    {Titre}                
                </span>
                <img src={logo_down} alt="Logo" onClick={() => setIsOpen(true)}/>            
            </div>   
        </div>                       
    )
}