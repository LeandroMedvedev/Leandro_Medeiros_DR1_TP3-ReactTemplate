import styles from './style.module.css';

function Task05() {
  return (
    <div className={styles.conteiner}>
      <h2>
        Desenvolvimento <em>Front-End</em> com <em>Frameworks</em>
      </h2>
      <h3>
        <em>Mobile-First</em> UI com <em>React</em>
      </h3>
      <h4>Diferença entre responsividade e adaptabilidade</h4>
      <p>
        Responsividade e adaptabilidade são conceitos frequentemente confundidos
        no desenvolvimento web, mas possuem significados distintos.
      </p>
      <p>
        <strong>Responsividade</strong> se refere à capacidade de um{' '}
        <em>layout</em> se ajustar automaticamente a diferentes tamanhos de
        tela, desde <em>smartphones</em> até <em>desktops</em>. Isso é
        geralmente alcançado através do uso de <em>media queries</em> em CSS.
      </p>
      <p>
        <strong>Adaptabilidade</strong>, por outro lado, vai além do simples
        redimensionamento. Ela envolve a criação de experiências de usuário
        personalizadas para cada dispositivo, considerando fatores como tamanho
        de tela, orientação, capacidades de <em>hardware</em> e até mesmo
        preferências do usuário.
      </p>
      <p>
        Em síntese, sites responsivos usam <em>layouts</em> fluidos que se
        ajustam automaticamente, enquanto sites adaptáveis selecionam{' '}
        <em>layouts</em> pré-definidos para diferentes dispositivos.
      </p>
    </div>
  );
}

export default Task05;
