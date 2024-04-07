Aula que parei

https://www.youtube.com/watch?v=Er3eYeIYSGE&t=304s&ab_channel=ChameleonCode

solução erro no path :

Tive o mesmo problema, fui ler a documentação e utilizando a option de debug deles (ou simplesmente colocar o require dentro de uma váriavel e retornar no console.log), retorna o seguinte erro:


[DEBUG] Failed to load ...\alemdocodigo-introapi-deploy\src\.env ENOENT: 
no such file or directory, open ...\alemdocodigo-introapi-deploy\src\.env'      

A solução é simples, por padrão, o dotenv procura pelo arquivo '.env' dentro do diretório onde o mesmo foi chamado, no caso, foi chamado no app.js, que está dentro da pasta src, MAS, o .env foi criado acima (nível). Por isso ele retorna esse erro.

Basta passarmos um caminho dentro do config(), segue o exemplo que peguei da documentação de como passar um caminho custom:

require('dotenv').config({ path: '/custom/path/to/.env' })

No meu caso, só subi o nível com '..' e passei o arquivo (Sim, é necessário passar o arquivo também.). Ficou assim:

config({ path: '../.env' })

Lembrando que segui a mesma estruturação de pasta que ele no curso. Caso você tenha estruturado diferente, basta referenciar no path onde você criou o arquivo .env.

Segue o link da documentação: https://www.npmjs.com/package/dotenv
