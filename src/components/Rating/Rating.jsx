/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import star from "../../assets/star_FILL1_wght400_GRAD0_opsz40.svg"
import starGrey from "../../assets/star_FILL1_wght400_GRAD0_opsz40 grey.svg"
import styles from './Rating.module.css';

export default function Rating({numStar}) {
    let stars = [];
    for (let i = 0; i < numStar; i++) {
        stars.push (<img key={'star-'+i} src={star} alt="star" className={styles.star}/>)
      }
    for (let i = 0; i < (5-numStar); i++) {
        stars.push (<img key={'star-'+i+5} src={starGrey} alt="starGrey" className={styles.star}/>)
    }
    return (
        <div>
            {stars}
        </div>
    ) 
} 