import PostModelo from "Componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";
import fotoSobreMim from "assets/minha_foto.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Adriano Matos</h3>

      <img
        src={fotoSobreMim}
        alt="Minha foto"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
        placeat? Ipsam similique quidem accusamus! Quia autem fuga quisquam
        quidem eos nihil repellat illum ullam, eligendi sapiente delectus
        deserunt mollitia enim!
      </p><br />
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
        placeat? Ipsam similique quidem accusamus! Quia autem fuga quisquam
        quidem eos nihil repellat illum ullam, eligendi sapiente delectus
        deserunt mollitia enim!
      </p><br />
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
        placeat? Ipsam similique quidem accusamus! Quia autem fuga quisquam
        quidem eos nihil repellat illum ullam, eligendi sapiente delectus
        deserunt mollitia enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
        placeat? Ipsam similique quidem accusamus! Quia autem fuga quisquam
        quidem eos nihil repellat illum ullam, eligendi sapiente delectus
        deserunt mollitia enim!
      </p>
    </PostModelo>
  );
}
