import styles from './body.module.css'
export function Body (){
    return (
        <>
        <div className={styles.container}>
        <h1>Conheça Nossa Hístoria</h1>
            <div className={styles.slide}>
                <img   src="https://images.unsplash.com/photo-1716237385627-97d054ab93d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <p>Há mais de uma década, a Pedaço do Céu nasceu do sonho 
                    de uma família apaixonada por pizza e boas histórias. 
                    Começou pequena, mas com muito amor e dedicação, transformou-se em um refúgio 
                    aconchegante para amigos e famílias se reunirem. Cada detalhe do espaço foi
                     pensado para criar um ambiente acolhedor, onde todos se sentem em casa. Aqui,
                      o sabor das pizzas artesanais se mistura com a alegria dos encontros.
                    Pedaço do Céu: mais que uma pizzaria, um lar de momentos felizes!</p>
            </div>

            <div className={styles.slide}>
                <p className={styles.pmobile}>A Pedaço do Céu começou com mestres pizzaiolos que trouxeram tradição e paixão pela 
                    verdadeira pizza italiana. Cada pizza é cuidadosamente preparada à mão, com ingredientes
                     selecionados e assada em forno a lenha, garantindo um sabor inigualável. O aroma irresistível
                      e a textura crocante conquistam a cada mordida. Mais do que uma pizza, é uma experiência
                       celestial de sabor! Venha provar e descubra por que cada pedaço é realmente um pedaço do céu.!
                       </p>
                <img className= {styles.img2} src="https://images.unsplash.com/photo-1708436076906-fdd48df3782b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>

            <div className={styles.slide}>
                <img src="https://images.unsplash.com/photo-1726843268433-63a9ba1b1176?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <p>A Pedaço do Céu nasceu no coração da Zona Sul do Rio de Janeiro,
                     trazendo o verdadeiro sabor da tradição italiana. Desde sua inauguração,
                      tornou-se ponto de encontro de famílias e amigos, conquistando corações com suas
                       pizzas artesanais feitas no forno a lenha. Mesmo após tantos anos, permanece no
                        mesmo local, mantendo viva sua essência e qualidade incomparável. Hoje, é um símbolo
                         de tradição e sabor, reconhecido e amado por toda a região. Venha fazer parte dessa
                          história deliciosa!</p>
            </div>
            </div>
           
        </>
    )
}