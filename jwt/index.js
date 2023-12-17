//Helper: https://www.alura.com.br/artigos/o-que-e-json-web-tokens
//Importando a biblioteca jsonwebtoken
const jwt = require('jsonwebtoken');
const secretKey = 'bWFtYW9jb21hY3VjYXIxOTg5ISgqKA==';

//Por padrão, o algoritmo de codificação é o HS256.
const nossoToken = jwt.sign({
    email: 'jorge.castro@alura.com.br',
    password: 'teste@123#@!'
},
    secretKey, {
    expiresIn: '24h',
    subject: '1'
}
);