import styles from './style.module.css';

function Task06() {
  return (
    <div className={styles.conteiner}>
      <h2 className={styles.tituloSegundoNivel}>
        Desenvolvimento <em>Front-End</em> com <em>Frameworks</em>
      </h2>
      <h3 className={styles.tituloTerceiroNivel}>
        <em>Mobile-First</em> UI com <em>React</em>
      </h3>
      <h4 className={styles.tituloQuartoNivel}>Conceitos de Usabilidade</h4>
      <p className={styles.paragrafo}>
        <strong>Usabilidade</strong> refere-se à facilidade de uso de uma
        interface ou sistema pelo usuário. É um conceito importante no{' '}
        <em>design</em> de interfaces, pois afeta diretamente a experiência do
        usuário.
      </p>
      <p className={styles.paragrafo}>
        Existem diferentes fatores que influenciam a usabilidade, como a
        simplicidade, a eficiência e a satisfação do usuário ao interagir com um
        produto ou sistema.
      </p>
      <p className={styles.paragrafo}>
        A usabilidade deve ser considerada desde o início do desenvolvimento
        para garantir que o produto final seja intuitivo e agradável para o
        público-alvo.
      </p>
    </div>
  );
}

export default Task06;
