# Título da Aplicação/API

Nome do Projeto: **Lista de Compras API**

## Identificação/Autor

Autor: **Rafael Sedor**

## Descrição do Projeto

Esta é uma API RESTful desenvolvida com o framework **NestJS** para gerenciar listas de compras. A aplicação permite que os usuários criem listas, adicionem produtos, e gerenciem suas compras.

## Instruções de Execução

### Instalação

Para instalar as dependências do projeto, siga os passos abaixo:

```bash
npm install
```

### Pré-requisitos

- **Node.js**: v16.x.x ou superior
- **NPM**: v8.x.x ou superior

### Execução

Para executar a aplicação localmente:

1. Execute o seguinte comando para iniciar o servidor:

   ```bash
   npm run start
   ```

2. A API estará disponível em [http://localhost:3000](http://localhost:3000).

### Configuração do Banco de Dados

Esta API utiliza **MySQL** como banco de dados. Para configurar o banco de dados:

1. Configure um banco de dados local ou via container Docker.
2. Altere as variáveis de ambiente para apontar para o seu banco.

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e inclua as seguintes variáveis de ambiente:

```
DB_TYPE=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=<sua_senha>
DB_DATABASE=shopping_list
DB_ENTITIES=src/**/*.entity.ts
DB_MIGRATIONS=src/migrations/*.ts
DB_SYNCHRONIZE=false
JWT_SECRET=<sua_chave_secreta>
PORT=3000
```


## Checklist de Funcionalidades

- [x] RA1: API funcional usando NestJS
- [x] RA2: Persistência de dados com MySQL

## Checklist | Indicadores de Desempenho (ID) dos Resultados de Aprendizagem (RA)

### RA1 - Projetar e desenvolver uma API funcional utilizando o framework NestJS

- [x] **ID1**: Configurado ambiente de desenvolvimento e criação da API usando NestJS.
- [x] **ID2**: Organização da lógica de negócios separando responsabilidades em services e controllers.
- [x] **ID3**: Utilização de providers e injeção de dependência.
- [x] **ID4**: Manipulação de rotas HTTP e tratamento de requisições.
- [x] **ID5**: Tratamento de erros com filtros globais e mensagens personalizadas.
- [x] **ID6**: Criação de classes DTO para validação dos dados.
- [x] **ID7**: Aplicou pipes de validação no NestJS para garantir integridade dos dados.

### RA2 - Implementar persistência de dados com um banco de dados relacional utilizando Prisma ou TypeORM

- [x] **ID8**: Modelagem das entidades e relações no ERD.
- [x] **ID9**: Configuração do Prisma e conexão ao banco de dados.
- [x] **ID10**: Criação e aplicação de migrações de banco de dados.
- [x] **ID11**: Implementação das operações CRUD para as entidades.
