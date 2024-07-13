import MenuLink from "../MenuLink";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        {/* < Menu to="/" texto="Início"/> */}
        <MenuLink to="/">
					Início
				</MenuLink>

        <MenuLink to="/sobremim">Sobre Mim</MenuLink>
      </nav>
    </header>
  );
}
