// const { request, response } = require('express');
const db = require('../database/connections');
const Caixa = require('../models/CaixaEletronicoModel');

const caixa = new Caixa();

module.exports = class SaqueController 
{
    async fazSaque(body) 
    {
        const { valor_saque } = body;
        var limitedesaque = 10000;

        if(valor_saque <= limitedesaque) 
        {
            if(valor_saque % 10 == 0 || valor_saque % 20 == 0 || valor_saque % 50 == 0 || valor_saque % 100 == 0)
            {
                var retorno = await caixa.retorna_notas(valor_saque);
                return retorno;
            }
            else
            {
                return [{ mensagem: "Notas disponiveis: R$10, R$20, R$50 e R$100", erro: true}];
            }
            
        } else {
            return [{ mensagem: "O valor de cada saque está limitado a R$10.000,00", erro: true}];
        }
        
    }

}

