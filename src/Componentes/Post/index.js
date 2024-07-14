import styles from "./Post.module.css";
// Se as imagens não estiverem na pasta public, cada uma terá de ser importada individualmente assim em src...:
// import minhaFoto from "assets/minha_foto.png";

export default function Post({ post }) {
  return (
    <div className={styles.post}>
      <img
        className={styles.capa}
        src={`assets/posts/${post.id}/capa.png`}
        alt="Capa do post"
      />

			<h2 className={styles.titulo}>{post.titulo}</h2>

			<button className={styles.botaoLer}>Ler</button>
    </div>
  );
}
