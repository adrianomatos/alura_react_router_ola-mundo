## Criação do projeto

- npx create-react-app ola-mundo
- limpar projeto, deixado só app.js e indexes, gitignore, package, readme e pastas public e node_modules
- cd ola-mundo
- npm start

## Bibliotecas

- Router versão 6 (npm install react-router-dom@6)

## Configurar jsconfig.json

### O que aprendemos:

- 1 - Criando o olá mundo
A - Instalar o react-router-dom;
  Utilizamos o comando npm install react-router-dom@6 que pegamos da própria documentação para instalar a versão 6.

B - Utilizar os componentes BrowserRouter, Routes e Route do react-router-dom;
Dentro do BrowserRouter, conseguimos utilizar os outros componentes da biblioteca. O Routes alterna entre diferentes rotas e o Route renderiza um determinado componente (com o atributo element) em um determinado caminho (com o atributo path).

C - Criar uma rota para um caminho que não existe.
Adicionando uma Route com o path='\*', podemos renderizar uma página de 404, caso a URL acessada não corresponda a nenhuma das outras rotas.

- 2 - SPA com React-Router-DOM
A - Diferenciar o comportamento de sites tradicionais e de SPAs;
Sites tradicionais são compostos por várias páginas HTML, e uma requisição é realizada para o servidor do site sempre que queremos ir para uma nova página. Já as SPAs (Single Page Applications) são compostas por uma única página HTML, e seu conteúdo é alterado dinamicamente pelo JavaScript.

B - Utilizar o componente Link do react-router-dom;
Ele mantém o comportamento de uma SPA, impedindo que a página do navegador recarregue.

C - Utilizar o hook useLocation;
Com ele, podemos obter informações da rota que estamos atualmente.

D - Utilizar o componente NavLink do react-router-dom.
Com ele, temos acesso direto à informação do link estar ativo ou não.

- 3 -

- 4 -

- 5 -
