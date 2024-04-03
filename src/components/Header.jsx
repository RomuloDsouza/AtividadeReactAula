import styles from './Header.module.css'

import imgLogo from '../assets/React-logo.png'


 export function Header(){
    return(
        <header className={styles.header} >
            <img src={imgLogo} alt='Logo Herader' />
            <strong>Rpv React posts</strong>
        </header>

    )
 } 