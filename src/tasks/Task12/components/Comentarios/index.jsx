import styles from './style.module.css';

function Comentarios() {
  return (
    <section className={styles.comentarios}>
      <h2 className={styles.subtitulo}>Comentários</h2>
      <ul className={styles.lista}>
        <li>
          <p className={styles.paragraph}>
            <strong>Marc Márquez</strong> - 01/09/2024
          </p>
          <p className={styles.comentario}>
            Essa CBR600RR é uma máquina!😱🔥 O vídeo não faz justiça ao quanto
            essa moto é insana! Quero uma agora!
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            <strong>Luca Marini</strong> - 02/09/2024
          </p>
          <p className={styles.comentario}>
            O vídeo da CBR600RR me deixou sem palavras!🚀💥 Que potência e
            estilo! Honda arrasou mais uma vez.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Comentarios;
