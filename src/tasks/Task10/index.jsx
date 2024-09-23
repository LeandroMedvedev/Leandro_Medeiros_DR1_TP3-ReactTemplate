import styles from './style.module.css';
import Header from './components/Header';
import Feed from './components/Feed';
import Amigos from './components/Amigos';
import Sugestoes from './components/Sugestoes';
import Usuario from './components/Usuario';

function Task10() {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.conteudoPrincipal}>
        <Usuario />
        <Amigos />
        <Sugestoes />
      </main>
      <aside className={styles.feedPostagens}>
        <Feed />
      </aside>
    </div>
  );
}

export default Task10;
