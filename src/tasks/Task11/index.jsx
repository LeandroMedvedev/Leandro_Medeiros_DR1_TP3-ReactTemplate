import AnimaisRelacionados from './components/AnimaisRelacionados';
import AnimalDetalhes from './components/AnimalDetalhes';
import Comentarios from './components/Comentarios';
import Header from './components/Header';
import styles from './style.module.css';

function Task11() {
  return (
    <div className={styles.conteiner}>
      <Header />
      <AnimalDetalhes />
      <AnimaisRelacionados />
      <Comentarios />
    </div>
  );
}

export default Task11;
