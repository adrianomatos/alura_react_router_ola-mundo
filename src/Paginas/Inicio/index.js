import Banner from "Componentes/Banner";
import Post from "Componentes/Post";
import posts from "json/posts.json";
import styles from "./Inicio.module.css";

export default function Inicio() {
  return (
    <main>
      <Banner />

      <ul className={styles.posts}> {posts.map((post) => (
          <li key={post.id}>
						<Post post={post}/>
					</li>
        ))}
      </ul>
    </main>
  );
}
