import styles from './style.module.css';

function PostagemItem({
  imagem,
  titulo,
  texto,
  data,
  autor,
  curtidas,
  compartilhamentos,
  comentarios,
}) {
  return (
    <div className={styles.conteiner}>
      <img src={imagem} alt="Imagem da postagem" />
      <h3>{titulo}</h3>
      <p>{texto}</p>
      <small>
        Publicado por {autor} em {data}
      </small>
      <div className={styles.interacoes}>
        <span>{curtidas} curtidas</span>
        <br />
        <span>{compartilhamentos} compartilhamentos</span>
      </div>
      <div className={styles.comentarios}>
        {comentarios.map((comentario, index) => (
          <p key={index}>{comentario}</p>
        ))}
      </div>
    </div>
  );
}

export default PostagemItem;
