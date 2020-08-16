<h1 align="center">
    <img alt="Next Level Week" src=".github/logo.svg" width="200px" />
</h1>

<p align="center">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/dpalmas/proffy?color=0000FF">

  <img alt="License" src="https://img.shields.io/github/license/dpalmas/proffy?color=0000FF&logo=MIT">
  
  <a href="https://github.com/dpalmas/proffy/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/dpalmas/proffy?color=0000FF">
  </a>
</p>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#thinking-sobre-este-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

-  [Typescript](https://www.typescriptlang.org/)
-  [Node.js](https://nodejs.org/en/)
-  [ReactJS](https://reactjs.org/)
-  [React Native](http://facebook.github.io/react-native/)
-  [Expo](https://expo.io/)

Extras:

- Main Libs
-  [Axios](https://github.com/axios/axios)
  - [Express](https://expressjs.com/pt-br/)

Estilos:
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)

## :thinking: Sobre este Projeto

O **Proffy** é uma plataforma de estudos online que ajuda pessoas a encontrarem professores online.
  
Essa aplicação foi desenvolvida durante a **Next Level Week #2**, projeto da [Rocketseat](https://rocketseat.com.br/).


<p align="center">
  <img alt="BeTheHero" src=".github/Proffy.png" width="100%">
</p>

## :computer: Instalação

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
  - Por fim, é **essencial** ter o **[Expo](https://expo.io/)** instalado de forma global na máquina

1. Faça um clone do repositório:

```sh
  $ git clone https://github.com/dpalmas/proffy.git
```

2. Executando a Aplicação:

```sh
  # API
  $ cd server
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Configurando o banco de dados e criando as tabelas.
  $ yarn knex:migrate # ou npm run knex:migrate

  # Inicie a API
  $ yarn start # ou npm start

  # Aplicação web
  $ cd web
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Inicie a aplicação web
  $ yarn start # ou npm start

  # Aplicação mobile
  $ cd mobile
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Inicie a aplicação mobile
  $ yarn start # ou npm start
```

## :memo: Licença
Este projeto está licenciado sob a licença [MIT](./LICENSE) &copy; [Rocketseat](https://rocketseat.com.br/).
