/* eslint-disable react/react-in-jsx-scope */
import style from './Error404.module.css'

export default function Error404() {
    return (
        <div className={style.errorNum}>
             <p className={style.number}>404</p>
             <p>Oups! La page que vous demandez n&apos;existe pas.</p> 
             <p>Retourner sur la page d’accueil</p> 
        </div>      
    )
}