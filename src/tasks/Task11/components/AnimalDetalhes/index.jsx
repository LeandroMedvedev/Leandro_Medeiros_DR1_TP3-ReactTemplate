import styles from './style.module.css';
import animalUm from '../../../../assets/photos/puppy-01.jpg';
import animalDois from '../../../../assets/photos/puppy-02.jpg';
import animalTres from '../../../../assets/photos/puppy-03.jpg';
import animalQuatro from '../../../../assets/photos/puppy-04.jpg';

function AnimalDetalhes() {
  return (
    <main className={styles.animalDetalhes}>
      <div className={styles.animalImagens}>
        <img
          src={animalUm}
          alt="Filhote de Maltês"
          className={styles.imagemPrincipal}
        />
        <div className={styles.outrasImagens}>
          <img src={animalDois} alt="Filhote de Maltês" />
          <img src={animalTres} alt="Filhote de Maltês" />
          <img src={animalQuatro} alt="Filhote de Maltês" />
        </div>
      </div>

      <div className={styles.animaInfo}>
        <h1>Filhote de Maltês</h1>
        <p className={styles.valor}>R$ 3.299,90</p>
        <p className={styles.descricao}>
          Este adorável filhote de Maltês é um companheiro carinhoso e cheio de
          energia. Com seu pelo branco macio e sedoso, ele é perfeito para quem
          busca um amigo leal e afetuoso. Inteligente, brincalhão e extremamente
          dócil, o Maltês se adapta bem a ambientes familiares e adora estar por
          perto de seus donos. Ideal para apartamentos ou casas, ele traz
          alegria e muita fofura ao seu dia a dia. Adote esse pequeno encantador
          e ganhe um amigo para a vida toda!
        </p>
        <ul className={styles.especificacoes}>
          <li>
            <strong>Tamanho e peso:</strong> O filhote de Maltês, quando adulto,
            atinge um peso médio entre 3 a 4 kg e uma altura de 20 a 25 cm na
            cernelha.
          </li>
          <li>
            <strong>Pelagem:</strong> Possui uma pelagem longa, branca e sedosa,
            que requer escovação diária para evitar embaraços e manter o brilho
            natural.
          </li>
          <li>
            <strong>Expectativa de vida:</strong> A expectativa de vida do
            Maltês varia entre 12 a 15 anos, sendo uma raça conhecida por sua
            longevidade e boa saúde, desde que receba os cuidados adequados.
          </li>
        </ul>
      </div>
    </main>
  );
}

export default AnimalDetalhes;
