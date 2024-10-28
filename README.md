# Título da Aplicação/API

Nome do Projeto: **Lista de Compras API**

## Identificação/Autor

Autor: **Rafael Sedor**

## Descrição do Projeto

Esta é uma API RESTful desenvolvida com o framework **NestJS** para gerenciar listas de compras. A aplicação permite que os usuários criem listas, adicionem produtos, compartilhem suas listas, e gerenciem suas compras de maneira colaborativa.

## Link para a API em Produção

A API está hospedada em: [https://rafaelsedor.github.io/T.E_Lista_de_Compras_API](https://rafaelsedor.github.io/T.E_Lista_de_Compras_API)

## Instruções de Execução

### Instalação

Para instalar as dependências do projeto, siga os passos abaixo:

```bash
npm install
```

### Pré-requisitos

- **Node.js**: v16.x.x ou superior
- **NPM**: v8.x.x ou superior
- **Docker** (opcional para execução via container)

### Execução

Para executar a aplicação localmente:

1. Execute o seguinte comando para iniciar o servidor:

   ```bash
   npm run start:dev
   ```

2. A API estará disponível em [http://localhost:3000](http://localhost:3000).

### Configuração do Banco de Dados

Esta API utiliza **MySQL** como banco de dados. Para configurar o banco de dados:

1. Configure um banco de dados local ou via container Docker.
2. Altere as variáveis de ambiente para apontar para o seu banco.

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e inclua as seguintes variáveis de ambiente:

```
DATABASE_URL=mysql://username:password@localhost:3306/shopping_list
JWT_SECRET=your_jwt_secret
PORT=3000
```

### Diagrama de Entidade-Relacionamento (ERD)

![ERD](./docs/erd.png)

Ou acesse o link: [ERD do Projeto](https://link-para-o-diagrama.com)

### Documentação Swagger

A documentação dos endpoints gerada pelo Swagger pode ser acessada em: [https://rafaelsedor.github.io/T.E_Lista_de_Compras_API/api](https://rafaelsedor.github.io/T.E_Lista_de_Compras_API/api)

## Checklist de Funcionalidades

- [ ] RA1: API funcional usando NestJS
- [ ] RA2: Persistência de dados com MySQL
- [ ] RA3: Testes automatizados com Jest
- [ ] RA4: Documentação com Swagger
- [ ] RA5: Autenticação e Autorização

## Checklist | Indicadores de Desempenho (ID) dos Resultados de Aprendizagem (RA)

### RA1 - Projetar e desenvolver uma API funcional utilizando o framework NestJS

- [ ] **ID1**: Configurado ambiente de desenvolvimento e criação da API usando NestJS.
- [ ] **ID2**: Organização da lógica de negócios separando responsabilidades em services e controllers.
- [ ] **ID3**: Utilização de providers e injeção de dependência.
- [ ] **ID4**: Manipulação de rotas HTTP e tratamento de requisições.
- [ ] **ID5**: Tratamento de erros com filtros globais e mensagens personalizadas.
- [ ] **ID6**: Criação de classes DTO para validação dos dados.
- [ ] **ID7**: Aplicou pipes de validação no NestJS para garantir integridade dos dados.

### RA2 - Implementar persistência de dados com um banco de dados relacional utilizando Prisma ou TypeORM

- [ ] **ID8**: Modelagem das entidades e relações no ERD.
- [ ] **ID9**: Configuração do Prisma e conexão ao banco de dados.
- [ ] **ID10**: Criação e aplicação de migrações de banco de dados.
- [ ] **ID11**: Implementação das operações CRUD para as entidades.

### RA3 - Realizar testes automatizados para garantir a qualidade da API

- [ ] **ID12**: Testes automatizados utilizando Jest.
- [ ] **ID13**: Cobertura de testes para as principais rotas e serviços da API.

### RA4 - Gerar a documentação da API e realizar o deploy em um ambiente de produção

- [ ] **ID14**: Integração do Swagger para documentar os endpoints.
- [ ] **ID15**: Deploy da API na nuvem (Render.com).
- [ ] **ID16**: Garantiu o funcionamento da API em produção, incluindo a documentação Swagger.
- [ ] **ID17**: Configuração das variáveis de ambiente utilizando o ConfigModule.
- [ ] **ID18**: Versionamento de APIs REST no NestJS.

### RA5 - Implementar autenticação, autorização e segurança em APIs utilizando JWT, Guards, Middleware e Interceptadores

- [ ] **ID19**: Autenticação utilizando JWT.
- [ ] **ID20**: Controle de acesso baseado em roles e níveis de permissão.
- [ ] **ID21**: Middleware para autenticação e logging de requisições.
- [ ] **ID22**: Implementação de interceptadores para logging e modificação de respostas.
