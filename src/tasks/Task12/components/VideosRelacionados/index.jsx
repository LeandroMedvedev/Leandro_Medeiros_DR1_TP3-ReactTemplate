import styles from './style.module.css';

function VideosRelacionados() {
  return (
    <section className={styles.videosRelacionados}>
      <h2 className={styles.subtitulo}>Vídeos Relacionados</h2>
      <ul className={styles.lista}>
        <li className={styles.itemLista}>
          <iframe
            className={styles.videoRelacionado}
            src="https://www.youtube.com/embed/iPKptrZ9BBw?si=aDAiv11SIwhpS_qN"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <p className={styles.paragraph}>
            2024 CBR1000RR-R Fireblade SP: Born to Race | Supersport Motorcycle
          </p>
          <p className={styles.paragraph}>Honda Motorcycles Europe</p>
        </li>
        <li className={styles.itemLista}>
          <iframe
            className={styles.videoRelacionado}
            src="https://www.youtube.com/embed/i69iyDulTSg?si=P9AjAlKGv7xv8pWW"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <p className={styles.paragraph}>
            2024 Africa Twin Range - True Adventure
          </p>
          <p className={styles.paragraph}>Honda Motorcycles Europe</p>
        </li>
      </ul>
    </section>
  );
}

export default VideosRelacionados;
