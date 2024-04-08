# 🚀 Express Post - Primeira API simples
Este repositório contém uma aplicação simples em Express.js para gerenciar posts. Ela fornece endpoints para listar, criar, mostrar, atualizar e deletar posts.

<div align="center">
  
![Blog](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Blog](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Blog](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Blog](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

</div>

## 🔧 Instalação

Para executar esta aplicação localmente, siga os passos abaixo:

- Clone este repositório para sua máquina local:
  ```
  git clone https://github.com/seu-nome/seu-repositorio.git
  ```

- Dependências <br>
    - Instalação de dependências via NPM.<br><br>
  ``` <br>
  npm install
  ```
    - Instalação do express via NPM.<br><br>
  ``` <br>
  npm install express --save
  ```
    - Instalação do mongoose para mongoDB via NPM.<br><br>
  ``` <br>
  npm install mongoose 
  ```
⚠️ Obs : É necessários possuir o aplicativo do mongoDB em sua máquina para fins de teste. Esta API ainda não foi submetida ao Heroku.

## 🗃️ Esta aplicação depende das seguintes bibliotecas:

- express: Para lidar com requisições HTTP e rotas.
- mongoose: Para interagir com bancos de dados MongoDB.
- dotenv: Para carregar variáveis de ambiente de um arquivo .env.
- cors: Para permitir o Compartilhamento de Recursos entre Origens.
- Certifique-se de ter o Node.js e o npm instalados em sua máquina antes de prosseguir com a instalação.



## ✒️ Uso

Após instalar as dependências, você pode executar a aplicação com o seguinte comando:
`npm start`
Isso iniciará o servidor, e ele estará acessível em http://localhost:5000, onde 5000 é o número da porta especificado em suas variáveis de ambiente ou padrão para 3000 se não fornecido.



## 🖇️ Endpoints
Cada endpoint espera certos parâmetros ou corpos de requisição, certifique-se de fornecer os dados necessários de acordo com a documentação da API.

| Método | Rotas | Descrição |
|---|---|---|
| `GET` | /list_posts | Recupera uma lista de todos os posts.
| `POST` | /create_post | Cria um novo post.
| `PATCH` | /show_post/:post_id | Atualiza um post específico pelo seu ID.
| `DELETE` | /delete_post/:post_id | Deleta um post específico pelo seu ID.

## ⚙️ Variáveis de Ambiente

Esta aplicação utiliza variáveis de ambiente para configurar o servidor. Você deve criar um arquivo .env no diretório raiz do projeto e definir as seguintes variáveis:

```
PORT=5000
URL_MONGO=mongodb://localhost//api-adc
DATABASE_URL=mongodb+srv://root:jeferson123@cluster0.meqevhf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```


## 🎁 Contribuição

Contribuições são bem-vindas! Se encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou criar um pull request.


## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE MIT](https://choosealicense.com/licenses/mit/) para mais detalhes.
