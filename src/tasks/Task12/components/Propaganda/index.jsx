import styles from './style.module.css';
import cb600RR from '../../../../assets/photos/cb600rr.jpg';

function Propaganda() {
  return (
    <section className={styles.propaganda}>
      <h2 className={styles.subtitulo}>Honda CB600RR 2024</h2>
      <a
        className={styles.link}
        href="https://www.honda.co.uk/motorcycles/range/super-sport/cbr600rr/overview.html"
        target="_blank"
        rel="external"
      >
        <img
          className={styles.imagemPropaganda}
          src={cb600RR}
          alt="Honda CB600RR 2024"
          title="Honda CB600RR 2024 | Compre agora"
        />
      </a>
    </section>
  );
}

export default Propaganda;
