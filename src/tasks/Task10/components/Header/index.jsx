import logo from '../../../../assets/svgs/friend-space.svg';
import styles from './style.module.css';
import HamburguerMenu from '../HamburguerMenu';
import Svg from '../Svg';

function Header() {
  return (
    <header className={styles.header}>
      <Svg className={styles.logoIcon} alt="FriendSpace Logo" src={logo} />

      <HamburguerMenu />

      <nav>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href="#profile">Perfil</a>
          </li>
          <li className={styles.listItem}>
            <a href="#friends">Amigos</a>
          </li>
          <li className={styles.listItem}>
            <a href="#sugestions">Sugestões</a>
          </li>
          <li className={styles.listItem}>
            <a href="#feed">Feed</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
