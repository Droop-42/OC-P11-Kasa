/* eslint-disable react/react-in-jsx-scope */
import img from '../../assets/mountain.png';
import Accordion from '../../components/Accordion';
import styles from './About.module.css';

export default function About() {
    return (
        <div className={styles.about}>
             <img className={styles.aboutImg} src={img} height="100px" width="90%" />
             <div className={styles.aboutAccordions}>
                <Accordion Titre={'Fiabilité'} openState={false} > 
                    <p>
                        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont
                        conformes aux logements, et toutes les informations sont régulièrement vérifiées
                        par nos équipes
                    </p>
                </Accordion> 
                <Accordion Titre={'Respect'} openState={true}>
                    <p>
                        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement
                        discriminatoire ou de perturbation du voisinage entraînera une exclusion de
                        notre plateforme.
                    </p>
                </Accordion>
                <Accordion Titre={'Service'} openState={false}> 
                    <p>
                        Nos équipes se tiennent à votre disposition pour vous fournir une expérience
                        parfaite. N&apos;hésitez pas à nous contacter si vous avez la moindre question.
                    </p>
                </Accordion>
                <Accordion Titre={'Responsabilité'} openState={false}>
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les
                        voyageurs, chaque logement correspond aux critères de sécurité établis par nos
                        services. En laissant une note aussi bien à l&apos;hôte qu&apos;au locataire, cela permet à
                        nos équipes de vérifier que les standards sont bien respectés. Nous organisons également
                        des ateliers sur la sécurité domestique pour nos hôtes.
                    </p>
                </Accordion>
             </div>
        </div>      
    )
}