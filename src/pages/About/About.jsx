/* eslint-disable react/react-in-jsx-scope */
import img from '../../assets/mountain.png';
import Accordion from '../../components/Accordion';
import styles from './About.module.css';

export default function About() {
    const fiabilite_txt = `Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont
    conformes aux logements, et toutes les informations sont régulièrement vérifiées
    par nos équipes.`
    const respect_txt = `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement
    discriminatoire ou de perturbation du voisinage entraînera une exclusion de
    notre plateforme.`
    const service_txt = `Nos équipes se tiennent à votre disposition pour vous fournir une expérience
    parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`
    const responsabilite_txt = `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les
    voyageurs, chaque logement correspond aux critères de sécurité établis par nos
    services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à
    nos équipes de vérifier que les standards sont bien respectés. Nous organisons également
    des ateliers sur la sécurité domestique pour nos hôtes.`

    return (
        <div className={styles.about}>
             <img src={img} height="100px" width="90%" />
             <Accordion Titre={'Fiabilité'} Expand={fiabilite_txt}/>  
             <Accordion Titre={'Respect'} Expand={respect_txt}/>
             <Accordion Titre={'Service'} Expand={service_txt}/>
             <Accordion Titre={'Responsabilité'} Expand={responsabilite_txt}/>
        </div>      
    )
}