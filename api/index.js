const express = require("express");
const app = express();
const { apiSomar, apiMultiplicar } = require("./opecaoes");
app.use(express.json()); // Middleware para permitir que o Express interprete o corpo da requisicao como JSON



// app.get("/", (req, res) => {
//     res.send("Hello, Express! " + req.query.num); // req.query = para capturar o valor dos query params
// });

// app.get("/", (req, res) => {
//     res.send("POST");
// });

// app.get('/api/:id', (req, res) => {    // :id -> route params
//     const id = req.params.id
//     res.send('Hello World ' + id)
// })

// app.post('/somar', (req, res) => {
//     const { num1, num2 } = req.body
//     const result = somar(num1, num2)

//     res.status(201).send({
//         // result: result
//         result   // como as duas palavras sao iguais, apenas colocando result o js interpreta que é o resultado
//     })
// });

app.post('/somar', apiSomar)
app.post('/multiplicar', apiMultiplicar)

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});


// node --watch