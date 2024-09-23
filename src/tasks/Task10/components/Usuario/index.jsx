import styles from './style.module.css';
import fotoPerfil from '../../../../assets/photos/me.jpg';

function Usuario() {
  return (
    <div className={styles.conteiner}>
      <section className={styles.identificacao}>
        <img
          className={styles.fotoPerfil}
          src={fotoPerfil}
          alt="Foto de perfil do usuário"
          title="Leandro Medeiros"
        />
        <div>
          <h1 className={styles.titulo}>Leandro Medeiros</h1>
          <a href="mailto:medvedevleandro@outlook.com">
            medvedevleandro@outlook.com
          </a>
        </div>
      </section>

      <section className={styles.informacoesPessoais}>
        <p>
          Uhmm... Então você veio mesmo, hein. Legal te ter aqui! Sinta-se em
          casa, espero que goste. Bem, se você procura alguém diplomático,
          preciso, que gosta de corrigir os erros de português das pessoas,
          lento em entender piadas e fã de{' '}
          <a
            href="https://www.youtube.com/watch?v=dhVGO6c-pKM"
            rel="external"
            target="_blank"
          >
            The Verve
          </a>
          ,{' '}
          <a
            href="https://www.youtube.com/watch?v=71ZHVmSuBJM"
            rel="external"
            target="_blank"
          >
            New Order
          </a>
          ,{' '}
          <a
            href="https://www.youtube.com/watch?v=XFkzRNyygfk"
            rel="external"
            target="_blank"
          >
            Radiohead
          </a>
          ,{' '}
          <a
            href="https://www.youtube.com/watch?v=2JxRGvzwzxc"
            rel="external"
            target="_blank"
          >
            U2
          </a>
          ,{' '}
          <a
            href="https://www.youtube.com/watch?v=gn22YuZ-ne0"
            rel="external"
            target="_blank"
          >
            Noel Gallagher
          </a>
          ,{' '}
          <a
            href="https://www.imdb.com/title/tt0411008/?ref_=ext_shr_lnk"
            rel="external"
            target="_blank"
          >
            Lost
          </a>
          ,{' '}
          <a
            href="https://www.youtube.com/watch?v=YB_epS5h3F8"
            rel="external"
            target="_blank"
          >
            Seinfeld
          </a>
          ,{' '}
          <a
            href="https://www.imdb.com/title/tt0118300/?ref_=vp_vi_tt"
            rel="external"
            target="_blank"
          >
            Dawson's Creek
          </a>{' '}
          e{' '}
          <a
            href="https://www.imdb.com/title/tt0312172/?ref_=fn_al_tt_1"
            rel="external"
            target="_blank"
          >
            Monk
          </a>
          ; então está no lugar certo. <br />
          <a
            href="https://youtube.com/watch?v=nmvLhOJn9Qo"
            rel="external"
            target="_blank"
          >
            Hello, It's me
          </a>
          !
        </p>
      </section>
    </div>
  );
}

export default Usuario;
