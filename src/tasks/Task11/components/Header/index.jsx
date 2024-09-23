import styles from './style.module.css';

function Header() {
  return (
    <header className={styles.cabecalho}>
      <div className={styles.menuHamburguer}>
        <span>&#9776;</span>
      </div>
      <nav className={styles.menu}>
        <ul>
          <li className={styles.itemLista}>
            <a className={styles.link} href="#home">
              Home
            </a>
          </li>
          <li className={styles.itemLista}>
            <a className={styles.link} href="#breeds">
              Raças
            </a>
          </li>
          <li className={styles.itemLista}>
            <a className={styles.link} href="#offers">
              Ofertas
            </a>
          </li>
          <li className={styles.itemLista}>
            <a className={styles.link} href="#contact">
              Contato
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.menuOpcoes}>
        <p className={styles.companyName}>Bicho Leg@l</p>
      </div>
    </header>
  );
}

export default Header;
