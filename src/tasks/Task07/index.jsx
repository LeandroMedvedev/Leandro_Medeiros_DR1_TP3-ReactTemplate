import Card from './components/Card';
import styles from './style.module.css';
import { DADOS_CARTAO } from '../../constants';

function Task07() {
  return (
    <div className={styles.conteiner}>
      {DADOS_CARTAO.map((dados, index) => (
        <Card
          key={index}
          imagem={dados.imagem}
          textoAlternativo={dados.textoAlternativo}
          titulo={dados.titulo}
          descricao={dados.descricao}
          rodape={dados.rodape}
        />
      ))}
    </div>
  );
}

export default Task07;
