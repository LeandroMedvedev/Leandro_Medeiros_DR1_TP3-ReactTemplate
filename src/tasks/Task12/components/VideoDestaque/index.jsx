import styles from './style.module.css';
import honda from '../../../../assets/svgs/honda.svg';
import like from '../../../../assets/svgs/like.svg';
import share from '../../../../assets/svgs/share.svg';
import save from '../../../../assets/svgs/save.svg';
import denounce from '../../../../assets/svgs/denounce.svg';

function VideoDestaque() {
  return (
    <section className={styles.videoDestaque}>
      <iframe
        className={styles.videoPrincipal}
        src="https://www.youtube.com/embed/rSqmRfKJEJk?si=aZXfJKT9Y4VpoF45"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h1 className={styles.title}>
        2024 CBR600RR: Awaken the Race | Supersport Motorcycles | Honda
      </h1>
      <div className={styles.autorConteiner}>
        <img src={honda} alt="Logotipo Honda Motos" />
        <p className={styles.autor}>Honda Motorcycles Europe</p>
      </div>

      <div className={styles.menuIcones}>
        <img src={like} alt="Curtir" />
        <img src={share} alt="Compartilhar" />
        <img src={save} alt="Salvar" />
        <img src={denounce} alt="Denunciar" />
      </div>

      <div className={styles.descricao}>
        <p>
          A Honda relançou na Europa sua supersport de peso médio, projetada
          tanto para estrada quanto para pista. O modelo possui um motor DOHC de
          quatro cilindros em linha que gera 89 kW a 14.250 rpm, além de contar
          com uma embreagem assistida/deslizante e quickshifter. A moto é
          equipada com tecnologia Throttle By Wire e uma IMU de 6 eixos da
          Bosch, oferecendo diversos modos de pilotagem ajustáveis, controle de
          Wheelie, HSTC de 9 níveis, ABS em curva e controle de elevação
          traseira. O chassi inclui um quadro duplo de alumínio, garfos Showa,
          freios de alta performance e winglets frontais para melhor
          aerodinâmica. O modelo também possui uma tela TFT colorida, e um HRC
          Race Kit estará disponível para uso em circuitos.
        </p>
      </div>
    </section>
  );
}

export default VideoDestaque;
