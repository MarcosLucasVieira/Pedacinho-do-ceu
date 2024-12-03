import { Body } from '../Body/Body'
import { Header } from '../Header/Header'
import { Slider, SliderProps, Slide } from '../Slider/index'
import { SideBar } from '../SideBar/Sidebar'
import styles from './Main.module.css'



export function Main () {

    const settings : SliderProps = {
        spaceBetween: 50,
        slidesPerView: 1, // Configuração padrão para telas maiores
        navigation: true,
        pagination: {
          clickable: true,
        },
      };
    
    return (
        <>  
        <Header/>
        <SideBar/>
        <div className={styles.containerCards}>
             <div className={styles.template}>
              <h1 className={styles.topo}>Destaques</h1> 
             </div>
   <Slider settings={settings}>
      <Slide>
            <div className={styles.cards}>
                <img src="https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Pizza de Calabresa" />
                <h1 className={styles.titulo}>Pizza Calabresa Suprema + Refrigerante Refrescante </h1>
                <h3 className={styles.descricao}>
                Deliciosa pizza de calabresa, feita no fogão a lenha, acompanhada de refrigerante de 2 litros. A combinação perfeita para compartilhar com a família ou amigos</h3>
                <div className={styles.footer}> <a href=''>A Partir de R$ 39,99</a></div>
            </div>
      </Slide>

      <Slide>
             <div className={styles.cards}>
                <img src="https://images.unsplash.com/photo-1706954225234-fe9808ce3d72?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Pizza Familia" />
                <h1 className={styles.titulo}>Combo Familia Duas Pizzas Gigantes </h1>
                <h3 className={styles.descricao}>
                Saboreie duas pizzas gigantes, feitas para agradar a todos os gostos! Escolha seus sabores favoritos e aproveite essa refeição perfeita para a família. 🍕                </h3>
                <div className={styles.footer}> <a href=''>A Partir de R$ 59,99</a></div>
            </div>
      </Slide>
      
      <Slide>
           <div className={styles.cards}>
                <img src="https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGl6emElMjBkZSUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D" 
                alt="Pizza Doce" />
                <h1 className={styles.titulo}>Pizza Doce + 2 Refrigerantes de 2 Litros: A Combinação Perfeita!</h1>
                <h3 className={styles.descricao}>
                Uma deliciosa pizza doce de chocolate assada no fogão de lenha, acompanhada de um refrigerante de 2 litros à sua escolha. Uma combinação perfeita! 🍫🍕
                </h3>
                <div className={styles.footer}> <a href=''>A Partir de R$ 49,99</a></div>
            </div>
      </Slide>

      <Slide>
      <div className={styles.cards}>
                <img src="https://images.unsplash.com/photo-1599034594900-f54069f84a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VG9ydGElMjBkZSUyME1vcmFuZ298ZW58MHx8MHx8fDA%3D"
                 alt="Torta de Morango" />
                <h1 className={styles.titulo}>Torta de Morango com Chocolate + 1 Refrigerantes de 2 Litros: A Dupla Irresistível!</h1>
                <h3 className={styles.descricao}>
                    Experimente a irresistível Torta de Morango com Chocolate:
                     camadas macias, morangos frescos e chocolate cremoso! 
                </h3>
                <div className={styles.footer}> <a href=''>A Partir de R$ 79,99</a></div>
            </div>
      </Slide>
     </Slider>
        </div>
        <Body/>
        </>
    )

}