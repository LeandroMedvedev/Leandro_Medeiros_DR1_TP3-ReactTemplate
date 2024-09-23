import styles from './style.module.css';

function SugestaoItem({ foto, nome, amigoEmComum }) {
  return (
    <section className={styles.conteiner}>
      <img src={foto} alt={nome} className={styles.fotoSugestao} />
      <div className={styles.infoSugestao}>
        <h4>{nome}</h4>
        <p>Amigo em comum: {amigoEmComum}</p>
      </div>
    </section>
  );
}

export default SugestaoItem;
