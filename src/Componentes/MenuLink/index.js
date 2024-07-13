import { Link, useLocation } from "react-router-dom";
import styles from "./MenuLink.module.css";

// PROP CORINGA CHILDREN
export default function MenuLink({ children, to }) {
  const localizacao = useLocation();
  console.log(children);
  return (
    <Link
      className={`
						${styles.link}
						${localizacao.pathname === to ? styles.linkDestacado : ""}
					`}
      to={to}
    >
      {children}
    </Link>
  );
}

/* PROP CORINGA CHILDREN
Você está no caminho certo! A prop children é parecida com a ideia de passar um texto como texto="Início" dentro do componente Menu, mas com uma diferença importante:

A prop children é um "espaço reservado" para qualquer conteúdo que você colocar entre as tags do componente.

No exemplo que você deu, <Menu to="/" texto="Início"/>, você está passando um texto específico ("Início") para a prop texto.

Já com a prop children, você pode passar qualquer coisa:

Texto: <MenuLink to="/">Início</MenuLink>
Outro componente: <MenuLink to="/"><Button>Início</Button></MenuLink>
Combinação de texto e componentes: <MenuLink to="/"><span>Início</span> <Icon></Icon></MenuLink>
A prop children é como um "buraco" no componente que você pode preencher com o que quiser. O React vai pegar o conteúdo que você colocou dentro das tags do componente e renderizar dentro do componente.

Para te ajudar a visualizar:

Imagine que você está construindo um quadro de avisos. Você pode colocar um "espaço reservado" para que as pessoas coloquem seus avisos. Esse "espaço reservado" seria a prop children. As pessoas podem colocar um papel com um texto, um desenho, uma foto, ou qualquer coisa que elas quiserem.

No caso do componente MenuLink, o "espaço reservado" é para o texto do link. Você pode colocar qualquer texto que você quiser dentro das tags <MenuLink> e </MenuLink>, e o React vai renderizar esse texto dentro do componente.

Exercício:

Tente criar um componente chamado Card que recebe um título e um conteúdo como children. O componente deve renderizar um card com o título e o conteúdo.

Lembrese que a prop children é uma ferramenta poderosa para criar componentes flexíveis e reutilizáveis.

Você consegue pensar em outros exemplos de como a prop children pode ser útil?
*/
