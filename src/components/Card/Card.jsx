/* eslint-disable react/react-in-jsx-scope */
import styles from './Card.module.css';
import img from "../../assets/Background.png";
import Rating from '../Rating/Rating'
import Tag from '../Tag'
import Accordion from '../Accordion'
import { logements_list } from '../../datas/logements_list'
import profile from'../../assets/profile-picture-12.jpg'
import chevron_right from '../../assets/chevron_right_FILL0_wght400_GRAD0_opsz48.svg';
import chevron_left from '../../assets/chevron_left_FILL0_wght400_GRAD0_opsz48.svg';
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Card() {
    const { locId } = useParams()
    const navigate= useNavigate()

    function navigateToCard(id) {
      navigate("/Card/"+id)  }
      //navigate("/Error404")  }

    let loc = {}
    if (!logements_list.filter( loc => loc.id == locId)[0]) {
        console.log('isUndefined?',!logements_list.filter( loc => loc.id == locId)[0]);
        return navigate("/Error404")  //!!! not in loop?!!     
    } else {
        loc = logements_list.filter( loc => loc.id == locId)[0]       
    }

    let idx= logements_list.findIndex( loc => loc.id == locId )
    let previous = logements_list[idx-1].id
    let next = logements_list[idx+1].id
    
    const tagList = loc.tags.map( tag => { 
                return <Tag key={loc.id+tag} tagName={tag} />
            }
        )
    return (
        <div className={styles.card}>
            <img src={img} className={styles.card_img} />
            <div className={styles.arrow}>
                <img src={chevron_left} alt="Logo" className={styles.chevron} onClick={() => navigateToCard(previous)}/>
                <img src={chevron_right} alt="Logo2" className={styles.chevron} onClick={() => navigateToCard(next)}/>
            </div>
            <div className={styles.row}>
                <div>
                    <span className={styles.logement_txt}>{loc.title}</span>
                    <span className={styles.location_txt}>{loc.location}</span>
                </div>
                <div className={styles.owner}>
                    <div>
                        <div>{loc.host.name}</div>
                    </div>    
                    <img src={profile} className={styles.owner_img} />
                </div>
                
            </div>
            
            <div className={styles.row}>
                <div className={styles.tagRow}>
                    {tagList}
                </div>
                <Rating numStar={loc.rating} />
            </div>
            <div className={styles.row}> 
                <Accordion Titre={'Description'} Expand={loc.description} />
                <Accordion Titre='Équipements' 
                    Expand={loc.equipments} 
                />
            </div>
            
        </div>             
    )
}