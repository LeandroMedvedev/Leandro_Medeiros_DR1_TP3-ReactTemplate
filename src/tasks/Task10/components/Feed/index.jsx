import PostagemItem from '../PostagemItem';
import { POSTAGENS } from '../../../../constants';
import styles from './style.module.css';

function Feed() {
  return (
    <div className={styles.conteiner}>
      {POSTAGENS.map((postagem, indice) => (
        <PostagemItem
          key={indice}
          autor={postagem.autor}
          comentarios={postagem.comentarios}
          compartilhamentos={postagem.compartilhamentos}
          curtidas={postagem.curtidas}
          data={postagem.data}
          imagem={postagem.imagem}
          texto={postagem.texto}
          titulo={postagem.titulo}
        />
      ))}
    </div>
  );
}

export default Feed;
