import styles from './Cards.module.css'


export function Cards () {
    return(
        <>  <div className={styles.template}>
            <h1 className={styles.topo}>Destaques</h1>  </div>
            <div className={styles.container}>  
            <div className={styles.cards}>
                <img src="https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Pizza de Calabresa" />
                <h1 className={styles.titulo}>Pizza Calabresa Suprema + Refrigerante Refrescante </h1>
                <h3 className={styles.descricao}>
                Deliciosa pizza de calabresa, feita no fogão a lenha, acompanhada de refrigerante de 2 litros. A combinação perfeita para compartilhar com a família ou amigos</h3>
                <div className={styles.footer}> <a href=''>A Partir de R$ 39,99</a></div>
            </div>

            <div className={styles.cards}>
                <img src="https://images.unsplash.com/photo-1706954225234-fe9808ce3d72?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Pizza de Calabresa" />
                <h1 className={styles.titulo}>Combo Familia Duas Pizzas Gigantes </h1>
                <h3 className={styles.descricao}>
                Saboreie duas pizzas gigantes, feitas para agradar a todos os gostos! Escolha seus sabores favoritos e aproveite essa refeição perfeita para a família. 🍕                </h3>
                <div className={styles.footer}> <a href=''>A Partir de R$ 59,99</a></div>
            </div>

            <div className={styles.cards}>
                <img src="https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGl6emElMjBkZSUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D" 
                alt="Pizza de Calabresa" />
                <h1 className={styles.titulo}>Pizza Doce + 2 Refrigerantes de 2 Litros: A Combinação Perfeita!</h1>
                <h3 className={styles.descricao}>
                Uma deliciosa pizza doce de chocolate assada no fogão de lenha, acompanhada de um refrigerante de 2 litros à sua escolha. Uma combinação perfeita! 🍫🍕
                </h3>
                <div className={styles.footer}> <a href=''>A Partir de R$ 49,99</a></div>
            </div>
            </div>     
        </>
    )
}