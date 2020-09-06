const db = require('../database/connections');

module.exports = class CaixaEletronicoModel 
{
    // funcao principal com logica para retorno das notas
    async retorna_notas(valor_saque) 
    {
        var soma_notas = 0;
        var array_notas = [];
        const notas = await this.getNotas();

        var notasOrdenadas = notas.sort((a, b) => {
            return b - a
        });

        if(notasOrdenadas.includes(valor_saque)) {
            soma_notas = valor_saque;
            array_notas[array_notas.length] = valor_saque;
            
            return [{ notas: array_notas, operacao: true }];
        } 
        else {
            notasOrdenadas.forEach(function(nota, i) {
                var continuaLaco = true;
                while(continuaLaco) {
                    if(nota <= valor_saque) {
                        soma_notas = soma_notas + nota;
                        valor_saque = valor_saque - nota;
                        array_notas[array_notas.length] = nota;
                        continuaLaco = true;
                    } 
                    else {
                        continuaLaco = false;
                    }
                }
            });

            if(valor_saque == 0) {
                return [{ notas: array_notas, operacao: true }];
            }
        }
    }

    async getNotas()
    {
        var notas = await db('caixaeletronico').select('nota');
        var todasNotas = [];

        notas.forEach(function(nota, i) {
            todasNotas[todasNotas.length] = nota['nota'];
        });

        return todasNotas;
    }

    async cadastraNota(nota) {
        var cadastroNota = await db("caixaeletronico").insert({
            nota: nota,
        });

        if (cadastroNota) {
            return [{ mensagem: "Nota cadastrada com sucesso", operacao: true }];
        } else {
            return [{ mensagem: "Nota não cadastrada. Tente novamente mais tarde.", operacao: false }];
        }
    }
};