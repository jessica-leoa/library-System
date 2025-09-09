# 📚 Biblioteca com Clean Architecture em TypeScript

Este projeto foi desenvolvido com o objetivo de praticar e consolidar os princípios da **Clean Architecture**, aplicando-os em uma aplicação simples, porém organizada e escalável. A ideia central é a construção de um sistema para gerenciamento de livros em uma biblioteca.

---

## 🚀 Funcionalidades

A API expõe endpoints para manipulação de livros:

- GET /: Retorna uma mensagem de boas-vindas.
- GET /books: Retorna todos os livros.
- POST /book: Cria um novo livro.
- GET /book/:id: Retorna um livro específico pelo ID.
- PATCH /book/:id: Atualiza um livro específico pelo ID.
- DELETE /book/:id: Deleta um livro específico pelo ID.
---
A API expõe endpoints para gerenciamento de usuários:

GET /welcomeUser: Retorna uma mensagem de boas-vindas.
GET /users: Retorna todos os usuários.
POST /user: Cria um novo usuário.
GET /user/:id: Retorna um usuário específico pelo ID.
POST /login: Faz login de um usuário.
DELETE /user/:id: Deleta um usuário específico pelo ID.

## 🛠️ Tecnologias e Conceitos Utilizados

O projeto foi estruturado seguindo boas práticas e uso de ferramentas modernas:

* **Clean Architecture** → separação clara entre camadas de domínio, aplicação e infraestrutura.
* **Node.js** → ambiente de execução JavaScript no lado do servidor.
* **TypeScript** → tipagem estática para maior segurança e produtividade no desenvolvimento.
* **Express.js** → framework para criação e gerenciamento de rotas HTTP.
* **MongoDB** → banco de dados NoSQL para armazenamento dos registros.
* **Mongoose** → ODM para modelar e interagir com o MongoDB de forma mais simples e tipada.
* **UUID** → geração de identificadores únicos para os registros de livros.
* **CORS** → configuração para permitir acessos externos à API.
* **Thunder Client/Postman** → utilizados para validar e testar as requisições da API.
---

## ⚙️ Como rodar o projeto

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:

* Node.js 
* npm ou yarn (gerenciador de pacotes)
* TypeScript instalado globalmente 

### Passo a passo

Clone o repositório:

```bash
git clone https://github.com/jessica-leoa/library-System
```

Entre no diretório do projeto:

```bash
cd library-System
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
npm run start
```

O servidor ficará disponível em:
👉 [http://localhost:3000](http://localhost:3000)

---

## 📸 Demonstração


```
