// const { request, response } = require('express');
const db = require('../database/connections');
const Caixa = require('../models/CaixaEletronicoModel');

const caixa = new Caixa();

module.exports = class SaqueController 
{
    async fazSaque(body) 
    {
        const { valor_saque } = body;
        var valorMaximoSaque = 10000;
        var valorMinimoSaque = 10;

        if(valor_saque <= valorMaximoSaque && valor_saque >= valorMinimoSaque) {
            if(valor_saque % 10 == 0 || valor_saque % 20 == 0 || valor_saque % 50 == 0 || valor_saque % 100 == 0) {
                var retorno = await caixa.retorna_notas(valor_saque);
                return retorno;
            }
            else {
                return [{ mensagem: "Notas disponiveis: R$10, R$20, R$50 e R$100.", operacao: false}];
            }
        } 
        else {
            return [{ mensagem: "A cada saque voce pode retirar um valor entre R$10,00 e R$10.000,00.", operacao: false}];
        }        
    }

}

