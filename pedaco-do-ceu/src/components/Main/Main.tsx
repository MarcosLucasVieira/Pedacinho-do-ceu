import { Body } from '../Body/Body'
import { Cards } from '../Cards/Cards'
import { Header } from '../Header/Header'
import { SideBar } from '../SideBar/Sidebar'
import styles from './Main.module.css'


export function Main () {
    return (
        <>  <div className={styles.container}>
            <Header/>
            <SideBar/>
            <Cards/>
           <Body/>
</div>
        </>
    )

}