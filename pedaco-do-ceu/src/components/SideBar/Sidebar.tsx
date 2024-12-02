import styles from './Sidebar.module.css'

export function SideBar (){
    return(
        <>
        <div className={styles.container}>
        <button className={styles.botao}> Restaurantes </button>
        <button className={styles.botao}> Contatos </button>
        <button className={styles.botao}> Reservas </button>
        <button className={styles.botao}> Rodízio </button>
        <button className={styles.botao}> Delivery </button>
        </div>
        </>
    )
}