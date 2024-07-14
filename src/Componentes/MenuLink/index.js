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

/* NAVLINK ao invés de LINK
Primeiramente, remova a seguinte linha de código:

const localizacao = useLocation();

Remova também esse código que está dentro da template string do Link:

${localizacao.pathname === to ? styles.linkDestacado : ""}

Agora, troque o componente Link por NavLink. Não esqueça de importar NavLink:

import { NavLink } from 'react-router-dom';

Você pode aproveitar para remover os imports useLocation e Link.

Como é dito na seção NavLink da documentação, por padrão, o NavLink adiciona uma classe active para o link que realmente está ativo. Porém, como estamos utilizando Módulos CSS, precisaríamos criar um arquivo CSS normal com o estilo de link destacado.

Ao invés disso, vamos utilizar outro recurso que o NavLink oferece. Nos atributos className e style, em vez de atribuir uma string diretamente a eles, podemos atribuir uma função que retorna uma string. Essa função fornece como parâmetro um objeto que contém a propriedade isActive. Para acessar essa propriedade, vamos substituir a template string do className para uma função que retorna essa template string:

        <NavLink
            className={({ isActive }) => `
                ${styles.link}
            `}
            to={to}
        >
            {children}
        </NavLink>

Como o nome indica, a propriedade isActive (do inglês "está ativo") é true se o link estiver ativo e false se não estiver. Assim, podemos adicionar mais uma interpolação, com uma verificação semelhante à que estávamos fazendo antes:

${isActive ? styles.linkDestacado : ""}

Nesse ponto, pode ser que aconteça com você dos dois links ficarem ativos ao mesmo tempo quando você estiver na rota inicial! Isso porque o react-router-dom pode interpretar que a rota /sobremim também vai corresponder à rota /, pois ela também começa com /.

Para evitar isso, você pode adicionar a propriedade end no NavLink para garantir que esse comportamento não aconteça.

O código completo fica assim:

import { NavLink } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink({ children, to }) {

    return (
        <NavLink
            className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `}
            to={to}
            end
        >
            {children}
        </NavLink>
    )
}

Dessa forma, o projeto continua a funcionar igual a antes! Mas em vez de obter a rota através do useLocation e fazer uma verificação da rota atual, obtemos diretamente essa verificação pelo componente NavLink.*/