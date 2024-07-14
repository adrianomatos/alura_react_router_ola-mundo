import styles from "./Rodape.module.css";
import { ReactComponent as MarcaRegistrada } from "assets/marca_registrada.svg";

export default function () {
  return (
    <footer className={styles.rodape}>
      {/* Usando SVG como componente */}
      <MarcaRegistrada />
			Desenvolvido por Alura.
    </footer>
  );
}
