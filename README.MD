# Canvas API

Este projeto é uma API em Node.js usando Express para manipulação de um canvas no front end.

## Como iniciar

1. Clone o repositório:

   ```bash
   git clone

   npm install

   npm start

   npm run dev
   ```

```

# 📋 Estrutura de Pastas e Arquivos

Este projeto está organizado de forma a separar as responsabilidades em diferentes pastas e arquivos. Abaixo, você encontrará uma breve descrição de cada uma delas.

## 📂 **src/**

Contém todo o código-fonte do aplicativo.

- ### 📂 **controllers/**

  Controladores que lidam com as requisições HTTP e chamam os serviços necessários.

  - **canvasController.js**: Lida com as rotas relacionadas ao canvas.

- ### 📂 **models/**

  Modelos de dados, geralmente usados com Mongoose ou outra ORM.

  - **canvasModel.js**: Define o schema do canvas (ideal para uso com MongoDB).

- ### 📂 **routes/**

  Define as rotas da aplicação.

  - **canvasRoutes.js**: Contém as rotas relacionadas ao canvas.
  - **index.js**: Carrega todas as rotas da aplicação.

- ### 📂 **services/**

  Contém a lógica de negócios e interações com os modelos.

  - **canvasService.js**: Lógica para manipulação dos dados do canvas.

- ### 📂 **config/**

  Configurações da aplicação, como banco de dados e autenticação.

  - **db.js**: Configuração e conexão com o banco de dados.

- ### 📂 **utils/**

  Utilitários e funções de suporte.

  - **logger.js**: Configuração de logs.
  - **helpers.js**: Funções auxiliares que podem ser usadas em todo o projeto.

- ### 📂 **middlewares/**

  Middlewares personalizados.

  - **authMiddleware.js**: Middleware para autenticação.
  - **errorHandler.js**: Middleware para tratamento de erros globais.

- **app.js**: Configura o Express, middlewares e rotas.
- **server.js**: Inicializa o servidor e conecta ao banco de dados.

## 🧪 **tests/**

Contém os testes unitários, de integração e end-to-end (E2E).

- ### 📂 **unit/**

  Testes unitários para funções e componentes individuais.

- ### 📂 **integration/**

  Testes de integração para verificar a interação entre múltiplas partes do sistema.

- ### 📂 **e2e/**
  Testes de ponta a ponta para verificar o fluxo completo da aplicação.

## 🌐 **public/**

Arquivos estáticos como imagens, CSS e HTML.

- **index.html**: Arquivo principal HTML que pode ser servido.

## 📄 Arquivos Adicionais

- **.env**: Variáveis de ambiente sensíveis, como credenciais e chaves de API.
- **.gitignore**: Arquivos e pastas a serem ignorados pelo Git.
- **package.json**: Dependências e scripts do projeto.
```
