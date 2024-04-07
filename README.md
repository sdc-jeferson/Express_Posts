# 🚀 Express Post - Primeira API simples

<p>

https://img.shields.io/badge/Express.js-404D59?style=for-the-badge

https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white

https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black

</p>

Este repositório contém uma aplicação simples em Express.js para gerenciar posts. Ela fornece endpoints para listar, criar, mostrar, atualizar e deletar posts.

## 🔧 Instalação

Para executar esta aplicação localmente, siga os passos abaixo:

- Clone este repositório para sua máquina local:
  `git clone https://github.com/seu-nome/seu-repositorio.git`

- Dependências
  `npm install`

---

## Esta aplicação depende das seguintes bibliotecas:

- express: Para lidar com requisições HTTP e rotas.
- mongoose: Para interagir com bancos de dados MongoDB.
- dotenv: Para carregar variáveis de ambiente de um arquivo .env.
- cors: Para permitir o Compartilhamento de Recursos entre Origens.
- Certifique-se de ter o Node.js e o npm instalados em sua máquina antes de prosseguir com a instalação.

---

## Uso

Após instalar as dependências, você pode executar a aplicação com o seguinte comando:
`npm start`
Isso iniciará o servidor, e ele estará acessível em http://localhost:5000, onde 5000 é o número da porta especificado em suas variáveis de ambiente ou padrão para 3000 se não fornecido.

---

## Endpoints

- GET /list_posts: Recupera uma lista de todos os posts.
- POST /create_post: Cria um novo post.
- GET /show_post/:post_id: Mostra um post específico pelo seu ID.
- PATCH /update_post/:post_id: Atualiza um post específico pelo seu ID.
- DELETE /delete_post/:post_id: Deleta um post específico pelo seu ID.
  Cada endpoint espera certos parâmetros ou corpos de requisição, certifique-se de fornecer os dados necessários de acordo com a documentação da API.

## Variáveis de Ambiente

Esta aplicação utiliza variáveis de ambiente para configurar o servidor. Você deve criar um arquivo .env no diretório raiz do projeto e definir as seguintes variáveis:

`PORTA=3000`
`MONGODB_URI=mongodb+srv://root:jeferson123@cluster0.meqevhf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

---

## Contribuição

Contribuições são bem-vindas! Se encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou criar um pull request.

---

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo <a>LICENSE</a> para mais detalhes.
