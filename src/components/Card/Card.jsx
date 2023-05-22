/* eslint-disable react/react-in-jsx-scope */
import styles from './Card.module.css';
import Rating from '../Rating/Rating'
import Tag from '../Tag'
import Accordion from '../Accordion'
import Carroussel from '../Carroussel'
//import { logements_list } from '../../datas/logements_list'
import { useFetch } from '../../API/JSONConnect'
import { useParams } from 'react-router-dom'
import Error404 from '../../pages/Error404';

export default function Card() {
    const { locId } = useParams()
    let loc = {}
    let tagList = []
    
    //***
    const { isLoading, data, error } = useFetch('http://localhost:3000/logements.json')
    if (error) {
        return <span>Il y a un problème</span>
    } else if (isLoading) {
        return <span>Loading...</span>
    }
    const logements_list = data
    //***

    if (!logements_list.filter( loc => loc.id == locId)[0]) {
        return <Error404 />
    } else {
        loc = logements_list.filter( loc => loc.id == locId)[0]       
        tagList = loc.tags.map( tag => { 
                return <Tag key={loc.id+tag} tagName={tag} />
            })
        return (
            <div className={styles.card}>
                <Carroussel listImg={loc.pictures} className={styles.card_img} />
                <div className={styles.description}>
                <div className={styles.colLeft}>
                    <div>
                        <span className={styles.logement_txt}>{loc.title}</span>
                        <span className={styles.location_txt}>{loc.location}</span>
                    </div>
                    <div className={styles.tagRow}>
                        {tagList}
                    </div>
                </div>        
                <div className={styles.colRight}>
                    <div className={styles.owner}>
                        <div>
                            <div className={styles.ownerName}>{loc.host.name}</div>
                        </div>    
                        <img src={loc.host.picture} className={styles.owner_img} />
                    </div>
                    <Rating numStar={loc.rating} />
                </div>
                </div>
                
                <div className={styles.row}>
                    <div className={styles.cardAccordion}>
                    <Accordion Titre={'Description'} openState={true}>
                        {loc.description}
                    </Accordion>
                    </div>
                    <div className={styles.cardAccordion}>
                    <Accordion Titre={'Équipements'} openState={true}>
                        {loc.equipments.map( (equip) => 
                                                <div key={equip+'-'+loc.id}>
                                                    {equip}
                                                </div> 
                                                
                                        )}
                    </Accordion>
                    </div> 
                </div> 
            </div>             
        )
    }
}