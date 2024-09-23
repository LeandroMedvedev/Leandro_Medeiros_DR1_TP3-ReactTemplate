import terminal from '../../../../assets/svgs/terminal.svg';
import styles from './style.module.css';
import HamburguerMenu from '../HamburguerMenu';
import Svg from '../Svg';

function Header() {
  return (
    <header className={styles.header}>
      <Svg className={styles.logoIcon} alt="Terminal" src={terminal} />

      <HamburguerMenu />

      <nav>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href="#home">Home</a>
          </li>
          <li className={styles.listItem}>
            <a href="#services">Serviços</a>
          </li>
          <li className={styles.listItem}>
            <a href="#products">Produtos</a>
          </li>
          <li className={styles.listItem}>
            <a href="#about-us">Sobre nós</a>
          </li>
          <li className={styles.listItem}>
            <a href="#contacts">Contatos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
