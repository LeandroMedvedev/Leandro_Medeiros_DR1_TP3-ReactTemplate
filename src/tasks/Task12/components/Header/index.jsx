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
            <a id="home" className={styles.link} href="#home">
              Home
            </a>
          </li>
          <li className={styles.itemLista}>
            <a id="explore" className={styles.link} href="#explore">
              Explorar
            </a>
          </li>
          <li className={styles.itemLista}>
            <a id="favorites" className={styles.link} href="#favorites">
              Favoritos
            </a>
          </li>
          <li className={styles.itemLista}>
            <a id="library" className={styles.link} href="#library">
              Biblioteca
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.menuOpcoes}>
        <p className={styles.companyName}>Streamify</p>
      </div>
    </header>
  );
}

export default Header;
