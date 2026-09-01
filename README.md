# 🍔 DevBurger

Frontend da aplicação **DevBurger**, um sistema Full Stack de delivery desenvolvido com **React** e integrado a uma API própria construída com Node.js.

A aplicação permite navegar pelos produtos, realizar autenticação, adicionar itens ao carrinho, criar pedidos e realizar o fluxo de pagamento.

## 📋 Sobre o projeto

O DevBurger foi desenvolvido como uma aplicação Full Stack para simular o funcionamento de uma plataforma de delivery.

Este repositório contém o **frontend da aplicação**, responsável pela interface e interação do usuário com os recursos disponibilizados pela API.

O backend foi desenvolvido separadamente utilizando **Node.js, Express, PostgreSQL, Sequelize e JWT**.

## ✨ Principais funcionalidades

* Cadastro de usuários
* Login e autenticação
* Navegação entre páginas
* Rotas protegidas
* Exibição de produtos
* Exibição de categorias
* Carrinho de compras
* Gerenciamento dos itens do carrinho
* Criação de pedidos
* Integração com API REST
* Fluxo de pagamento com Stripe
* Interface responsiva

## 🛠️ Tecnologias utilizadas

* React
* JavaScript
* React Router
* Axios
* Styled Components
* Context API
* Stripe
* Git
* GitHub

## 🔗 Integração com a API

O frontend se comunica com uma API REST desenvolvida especificamente para o DevBurger.

A comunicação entre frontend e backend é realizada utilizando **Axios**, permitindo operações como autenticação, consulta de produtos, gerenciamento de pedidos e outras funcionalidades da aplicação.

## 🔐 Autenticação

O sistema possui fluxo de cadastro e login integrado ao backend.

Após a autenticação, as informações necessárias são utilizadas para controlar o acesso às áreas protegidas da aplicação.

O backend utiliza **JWT (JSON Web Token)** para autenticação.

## 🛒 Carrinho

A aplicação possui gerenciamento de carrinho, permitindo ao usuário selecionar produtos e controlar os itens antes da criação do pedido.

O estado compartilhado da aplicação é gerenciado utilizando recursos do React, incluindo **Context API**.

## 💳 Pagamentos

O DevBurger possui integração com **Stripe** para implementar o fluxo de pagamento da aplicação.

## ⚙️ Backend

O backend do DevBurger foi desenvolvido com:

* Node.js
* Express
* PostgreSQL
* Sequelize
* JWT
* Stripe
* Docker

Código da API:

https://github.com/LeonardoSPires/DevBurger

## 🚀 Executando o projeto

Clone o repositório:

```bash id="d4s4gu"
git clone https://github.com/LeonardoSPires/devburger-interface.git
```

Entre na pasta:

```bash id="8weq1e"
cd devburger-interface
```

Instale as dependências:

```bash id="6b1gkz"
npm install
```

Execute o projeto:

```bash id="rd6jrv"
npm run dev
```

## 🎯 O que este projeto demonstra

O desenvolvimento do DevBurger envolveu conceitos importantes de desenvolvimento frontend, como:

* componentização com React;
* gerenciamento de estado;
* consumo de API REST;
* autenticação;
* rotas públicas e protegidas;
* integração frontend/backend;
* gerenciamento de carrinho;
* integração com serviço de pagamento;
* estilização utilizando Styled Components;
* organização e reutilização de componentes.

## 🔄 Arquitetura da aplicação

O DevBurger é dividido em dois projetos:

```text id="yq37pl"
                 DevBurger
                     │
           ┌─────────┴─────────┐
           │                   │
        Frontend             Backend
           │                   │
         React              Node.js
     React Router           Express
         Axios            PostgreSQL
   Styled Components       Sequelize
      Context API             JWT
           │                   │
           └────── API ────────┘
                     │
                   Stripe
```

## 📌 Status

Projeto desenvolvido para fins de estudo e portfólio.

Frontend e backend estão disponíveis separadamente no GitHub.

---

### Desenvolvedor

**Leonardo Pires e Rodolfo Mori - DEVCLUB** 

Desenvolvedor Full Stack com foco em aplicações web, APIs e soluções para empresas.
