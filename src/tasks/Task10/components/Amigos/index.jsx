import AmigoItem from '../AmigoItem';
import styles from './style.module.css';
import { AMIGOS } from '../../../../constants';

function Amigos() {
  return (
    <section id="friends" className={styles.conteiner}>
      <h2>Amigos</h2>
      {AMIGOS.map((amigo, index) => (
        <AmigoItem
          key={index}
          foto={amigo.foto}
          nome={amigo.nome}
          amigosEmComum={amigo.amigosEmComum}
        />
      ))}
    </section>
  );
}

export default Amigos;
