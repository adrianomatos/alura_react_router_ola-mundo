import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá Mundo</h1>
        <p className={styles.paragrafo}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non laborum expedita dignissimos rem excepturi quibusdam dolorem odio pariatur ex perspiciatis ipsa placeat saepe odit exercitationem eum, nam modi possimus. Molestias.
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
          alt="Círculo"
        />
        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Minha foto"
        />
      </div>
    </div>
  );
}
