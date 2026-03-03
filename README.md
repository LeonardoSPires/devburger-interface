# 🍔 DevBurger Interface

Frontend da aplicação DevBurger.

Aplicação web desenvolvida em React para consumo da API DevBurger, permitindo autenticação de usuários, listagem de produtos, gerenciamento de carrinho e finalização de pedidos com pagamento via Stripe.

---

## 🚀 Tecnologias Utilizadas

- React
- React Router DOM
- Axios
- Styled Components
- Context API
- Stripe JS
- Vite
- ESLint + Prettier

---

## 🔐 Funcionalidades

### 👤 Autenticação
- Cadastro de usuário
- Login
- Armazenamento de token JWT
- Rotas protegidas

### 🍔 Produtos
- Listagem de produtos
- Filtro por categoria
- Interface responsiva

### 🛒 Carrinho
- Adicionar produto
- Remover produto
- Atualizar quantidade
- Cálculo automático do total

### 💳 Checkout
- Integração com Stripe
- Criação de Payment Intent
- Finalização de pedido

---

## 📸 Preview da Aplicação

(Adicionar prints aqui depois)

---

## 🧱 Estrutura do Projeto

```
src/
 ├── assets/
 ├── components/
 ├── config/
 ├── containers/
 ├── hooks/
 ├── layouts/
 ├── routes/
 ├── services/
 ├── styles/
 ├── utils/
 └── main.jsx
```

### Organização

- assets → imagens e arquivos estáticos
- components → componentes reutilizáveis
- containers → páginas principais da aplicação
- hooks → hooks customizados
- layouts → estrutura base das páginas
- routes → controle de rotas e proteção
- services → configuração da API (Axios)
- styles → estilos globais
- utils → funções auxiliares

---

## ⚙️ Como Executar

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/LeonardoSPires/devburger-interface.git
```

### 2️⃣ Instale as dependências

```bash
npm install
```

### 3️⃣ Configure a URL da API

No arquivo de configuração do Axios, ajuste para:

```
http://localhost:3000
```

ou para a URL do backend em produção.

### 4️⃣ Execute o projeto

```bash
npm run dev
```

Aplicação disponível em:

```
http://localhost:5173
```

---

## 🌐 Backend

API utilizada neste projeto:

👉 https://github.com/LeonardoSPires/DevBurger

---

## 📱 Responsividade

O projeto segue o guia definido em:

RESPONSIVITY_GUIDE.md

---

## 👨‍💻 Autor

Leonardo Pires  
Desenvolvedor Front-End com foco em evolução Fullstack
