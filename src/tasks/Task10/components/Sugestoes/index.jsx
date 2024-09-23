import SugestaoItem from '../SugestaoItem';
import styles from './style.module.css';
import { SUGESTOES } from '../../../../constants';

function Sugestoes() {
  return (
    <section className={styles.conteiner}>
      <h2>Sugestões de Amizade</h2>
      {SUGESTOES.map((sugestao, index) => (
        <SugestaoItem
          key={index}
          foto={sugestao.foto}
          nome={sugestao.nome}
          amigoEmComum={sugestao.amigoEmComum}
        />
      ))}
    </section>
  );
}

export default Sugestoes;
