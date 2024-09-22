import styles from './style.module.css';

function Card({ imagem, textoAlternativo, titulo, descricao, rodape }) {
  return (
    <div className={styles.conteiner}>
      <img className={styles.imagem} src={imagem} alt={textoAlternativo} />
      <div className={styles.informacoes}>
        <h2 className={styles.titulo}>{titulo}</h2>
        <p className={styles.descricao}>{descricao}</p>
        <footer className={styles.rodape}>{rodape}</footer>
      </div>
    </div>
  );
}

export default Card;
