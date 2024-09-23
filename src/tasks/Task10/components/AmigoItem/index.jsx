import styles from './style.module.css';

function AmigoItem({ foto, nome, amigosEmComum }) {
  return (
    <section className={styles.conteiner}>
      <img src={foto} alt={nome} className={styles.fotoAmigo} />
      <div className={styles.infoAmigo}>
        <h4>{nome}</h4>
        <p>{amigosEmComum} amigos em comum</p>
      </div>
    </section>
  );
}

export default AmigoItem;
