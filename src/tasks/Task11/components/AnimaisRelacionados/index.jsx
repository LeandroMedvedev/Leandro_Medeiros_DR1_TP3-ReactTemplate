import styles from './style.module.css';
import animalUm from '../../../../assets/photos/puppy-05.jpg';
import animalDois from '../../../../assets/photos/puppy-06.jpg';
import animalTres from '../../../../assets/photos/puppy-07.jpg';
import animalQuatro from '../../../../assets/photos/puppy-08.jpg';

function AnimaisRelacionados() {
  return (
    <section className={styles.animaisRelacionados}>
      <h2>Animais Relacionados</h2>
      <div className={styles.animaisLista}>
        <div className={styles.animalRelacionado}>
          <img src={animalUm} alt="Animal relacionado 1" />
          <p className={styles.nome}>Pug</p>
          <p className={styles.valor}>
            <strong>R$ 1.799,90</strong>
          </p>
        </div>

        <div className={styles.animalRelacionado}>
          <img src={animalDois} alt="Animal relacionado 2" />
          <p className={styles.nome}>Yorkshire Terrier</p>
          <p className={styles.valor}>
            <strong>R$ 2.999,90</strong>
          </p>
        </div>

        <div className={styles.animalRelacionado}>
          <img src={animalTres} alt="Animal relacionado 3" />
          <p className={styles.nome}>Lulu da Pomerânia</p>
          <p className={styles.valor}>
            <strong>R$ 1.999,90</strong>
          </p>
        </div>

        <div className={styles.animalRelacionado}>
          <img src={animalQuatro} alt="Animal relacionado 4" />
          <p className={styles.nome}>Border Collie</p>
          <p className={styles.valor}>
            <strong>R$ 3.849,90</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default AnimaisRelacionados;
