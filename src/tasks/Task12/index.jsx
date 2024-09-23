import styles from './style.module.css';
import Comentarios from './components/Comentarios';
import Header from './components/Header';
import Propaganda from './components/Propaganda';
import VideoDestaque from './components/VideoDestaque';
import VideosRelacionados from './components/VideosRelacionados';

function Task12() {
  return (
    <div className={styles.conteiner}>
      <Header />
      <VideoDestaque />
      <Propaganda />
      <VideosRelacionados />
      <Comentarios />
    </div>
  );
}

export default Task12;
