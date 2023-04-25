/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import styles from'./Carroussel.module.css'
import chevron_right from '../../assets/chevron_right_FILL0_wght400_GRAD0_opsz48.svg';
import chevron_left from '../../assets/chevron_left_FILL0_wght400_GRAD0_opsz48.svg';
import { useState } from 'react'

export default function Carroussel({listImg}) {   
    let [imgIndex, setImgIndex] = useState(0)
    let img = listImg[imgIndex]
    const lengthList = listImg.length

    if (lengthList>1) {
        return (
            <div className={styles.carroussel}>
                <img src={img} alt="logement" className={styles.card_img} />
                <div className={styles.arrow}>
                    <img src={chevron_left} alt="previous" className={styles.chevron} onClick={() => 
                            setImgIndex((index) => index === 0 ? lengthList-1 : index-1)
                        }/>                                                                                  
                    <img src={chevron_right} alt="next" className={styles.chevron} onClick={() => 
                            setImgIndex((index) => index === lengthList-1 ? 0 : index+1)
                        }/>
                </div>
                <span className={styles.num}>{(imgIndex+1)+'/'+lengthList}</span>
            </div>       
        )
    } else {
        return (
            <div className={styles.carroussel}>
                <img src={img} alt="logement" className={styles.card_img} />
        </div>
        )
    }
}
