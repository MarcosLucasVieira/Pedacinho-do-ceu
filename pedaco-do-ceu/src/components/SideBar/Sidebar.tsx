import { useNavigate } from 'react-router-dom';
import styles from './Sidebar.module.css';

export function SideBar() {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className={styles.container}>
      <button className={styles.botao} onClick={() => handleClick('/')}>Início</button>
      <button className={styles.botao} onClick={() => handleClick('/restaurantes')}>Restaurantes</button>
      <button className={styles.botao}>Reservas</button>
      <button className={styles.botao}>Rodízio</button>
      <button className={styles.botao}>Delivery</button>
    </div>
  );
}