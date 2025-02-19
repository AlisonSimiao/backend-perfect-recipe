# Perfect Recipe API

Bem-vindo ao repositório do **Perfect Recipe**, um projeto de backend desenvolvido para gerenciar receitas culinárias. Esta API foi construída utilizando **NestJS**, **Docker**, **MongoDB** e **Prisma** para fornecer uma solução robusta e escalável para o gerenciamento de receitas.

## Tecnologias Utilizadas

- **NestJS**: Um framework Node.js progressivo para construir aplicações server-side eficientes e escaláveis.
- **Docker**: Para conteinerização da aplicação, garantindo consistência entre diferentes ambientes de desenvolvimento e produção.
- **MongoDB**: Um banco de dados NoSQL para armazenar dados de receitas e usuários.
- **Prisma**: Um ORM moderno para Node.js e TypeScript, utilizado para gerenciar a camada de banco de dados de forma eficiente.

## Pré-requisitos

Antes de começar, certifique-se de que você tem os seguintes softwares instalados em sua máquina:

- [Node.js](https://nodejs.org/) (v16 ou superior)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [MongoDB](https://www.mongodb.com/) (opcional, pois o Docker já inclui o MongoDB)

## Configuração do Projeto

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/perfect-recipe.git
   cd perfect-recipe
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Configuração do Docker**

   Certifique-se de que o Docker está rodando na sua máquina. Em seguida, execute o seguinte comando para subir os containers:

   ```bash
   docker-compose up -d
   ```

   Isso irá iniciar o MongoDB e a aplicação NestJS em containers separados.

4. **Configuração do Prisma**

   Após o Docker estar rodando, você precisará gerar o cliente do Prisma e aplicar as migrações:

   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

5. **Rodando a aplicação**

   Com o Docker rodando e as migrações aplicadas, você pode iniciar a aplicação NestJS:

   ```bash
   npm run start:dev
   ```

   A API estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

```
perfect-recipe/
├── src/
│   ├── recipes/              # Módulo de receitas
│   ├── users/                # Módulo de usuários
│   ├── prisma/               # Configuração do Prisma
│   ├── app.module.ts         # Módulo principal da aplicação
│   └── main.ts               # Ponto de entrada da aplicação
├── docker-compose.yml        # Configuração do Docker Compose
├── Dockerfile                # Dockerfile para a aplicação NestJS
├── prisma/schema.prisma      # Schema do Prisma
├── .env                      # Variáveis de ambiente
└── README.md                 # Este arquivo
```

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

```env
DATABASE_URL=mongodb://mongo:27017/perfect-recipe
PORT=3000
```

## Endpoints da API

A API oferece os seguintes endpoints:

- **Receitas**
  - `GET /recipes`: Lista todas as receitas.
  - `GET /recipes/:id`: Obtém uma receita específica.
  - `POST /recipes`: Cria uma nova receita.
  - `PUT /recipes/:id`: Atualiza uma receita existente.
  - `DELETE /recipes/:id`: Remove uma receita.

- **Usuários**
  - `GET /users`: Lista todos os usuários.
  - `GET /users/:id`: Obtém um usuário específico.
  - `POST /users`: Cria um novo usuário.
  - `PUT /users/:id`: Atualiza um usuário existente.
  - `DELETE /users/:id`: Remove um usuário.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Perfect Recipe** - Uma API para gerenciar suas receitas culinárias de forma perfeita! 🍳