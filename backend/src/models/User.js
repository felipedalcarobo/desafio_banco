const db = require('../database/connections');
const bcrypt = require ("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = "senJN89Xnj8cd3298AS@ha";

module.exports = class User 
{
    registrar(nome, senha) 
    {
        const hashPassword = bcrypt.hashSync(senha, 10);

        return db("users").insert({
            nome: nome,
            senha: hashPassword
        });
    }

    async getUsuario(conta)
    {
        var usuario = await db('users').where({conta: conta});
        return usuario;
    }

    async login(conta, senha) 
    {
        const usuario = await this.getUsuario(conta);

        if(!usuario) {
            return [{ error: "Conta não encontrada" }];
        }
        else {
            var validaSenha = bcrypt.compare(senha, usuario[0].senha);

            if(!validaSenha) {
                return [{ error: "Senha inválida!" }];
            } 
            else {
                const token = jwt.sign({ usuario: usuario[0].conta }, SECRET, {
                    expiresIn: 604800 // 1 semana
                });
                return [{ "usuario": usuario[0].nome, "conta": usuario[0].conta, "token": token }];
            }
        }
    }
};