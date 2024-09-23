import styles from './style.module.css';

function Comentarios() {
  return (
    <section className={styles.comentarios}>
      <h2>Comentários</h2>
      <div className={styles.comentario}>
        <p>
          <strong>Luisa Mell</strong> <span>em 04/09/2024</span>
        </p>
        <p>
          Estou completamente apaixonada pelo meu novo filhote de Maltês! Ele é
          ainda mais fofo do que nas fotos. Super saudável, brincalhão e já está
          se adaptando muito bem à nossa rotina. A entrega foi rápida, e o
          atendimento, excelente. Recomendo para quem quer um companheiro leal e
          carinhoso.
        </p>
      </div>
      <div className={styles.comentario}>
        <p>
          <strong>Richard Rasmussen</strong> <span>em 03/09/2024</span>
        </p>
        <p>
          Adquiri um filhote de Maltês há duas semanas, e ele é simplesmente
          perfeito! Muito esperto e cheio de energia, já conquistou todos aqui
          em casa. Além de ser super sociável, ele se dá bem com crianças e
          outros animaizinhos. A experiência de compra foi muito tranquila, e o
          suporte ao cliente foi muito atencioso. Com certeza, farei mais
          compras aqui no futuro!
        </p>
      </div>
    </section>
  );
}

export default Comentarios;
