/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import styles from './Tag.module.css';

export default function Tag({ tagName }) {
    return (
        <div className={styles.tag}>
            {tagName}
        </div> 
    )
}