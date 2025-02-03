const { somar, multiplicar } = require("./services/funcoesRe");

const apiSomar = (req, res) => {
    const { num1, num2 } = req.body
    const result = somar(num1, num2)

    res.status(200).send({ result })
};

const apiMultiplicar = (req, res) => {
    const { val1, val2 } = req.body
    const resultMulti = multiplicar(val1, val2)

    res.status(200).send({ resultMulti })
}


module.exports = { apiSomar, apiMultiplicar }