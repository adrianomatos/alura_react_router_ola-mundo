import BotaoPrincipal from "Componentes/BotaoPrincipal";
import styles from "./NaoEncontrada.module.css";
import erro404 from "assets/erro_404.png";
import { useNavigate } from "react-router-dom";

export default function NaoEncontrada() {
  const navegar = useNavigate();

  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>

        <h1 className={styles.titulo}>Opas! Página não encontrada.</h1>

        <p className={styles.paragrafo}>
          Tem certeza de que era isso que estava procurando?
        </p>

        <p className={styles.paragrafo}>
          Talvez o artigo que vc procurava tenha sido removido permanentemente
          ou o link clicado seja inválido.
        </p>

        <div 
				className={styles.botaoContainer} 
				onClick={() => navegar(-1)}>
          <BotaoPrincipal tamanho="lg">Voltar</BotaoPrincipal>
        </div>

        <img
          className={styles.imagemCachorro}
          src={erro404}
          alt="Imagem erro 404 cachorro"
        />
      </div>

      <div className={styles.espacoEmBranco}></div>
    </>
  );
}
