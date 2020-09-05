const db = require('../database/connections');

const User = require('../models/User');
const user = new User();

module.exports = class AuthController 
{

    async registro(body) 
    {
        const { nome, senha } = body;
        if(nome && senha) {
            var registro = await user.registrar(nome, senha);
            registro = [{ conta: registro }];
        } else {
            var registro = [{mensagem: "Insira seu nome e senha para fazer seu cadastro", }];
        }

        return registro;
    }
    

    async login(body) 
    {
        const { conta, senha } = body;
        if(conta && senha) {
            var login = await user.login(conta, senha);
        } else {
            var login = [{mensagem: "Insira sua conta e senha para fazer seu login", }];
        }

        return login;
    }


};