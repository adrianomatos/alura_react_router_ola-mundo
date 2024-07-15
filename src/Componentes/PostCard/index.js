import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";
import BotaoPrincipal from "Componentes/BotaoPrincipal";
// Se as imagens não estiverem na pasta public, cada uma terá de ser importada individualmente assim em src...:
// import minhaFoto from "assets/minha_foto.png";

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`assets/posts/${post.id}/capa.png`}
          alt="Capa do post"
        />

        <h2 className={styles.titulo}>{post.titulo}</h2>

        <BotaoPrincipal>Ler</BotaoPrincipal>
      </div>
    </Link>
  );
}
