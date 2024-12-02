import { User, Bag, ListPlus } from 'phosphor-react'
import styles from './Header.module.css'
export function Header (){
    return(
        <>
        <div className={styles.container}>
        <ListPlus className={styles.List}/>
        <div className={styles.card}>
        <a  href="http://">Login</a>
        <a href="http://">Cadastro</a>
        <User className={styles.User} />
        <Bag  className={styles.Bag}/>
        </div>
        </div>
        </>
    )
}