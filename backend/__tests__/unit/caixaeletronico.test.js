const request = require('supertest');
const server = require('../../src/server.js');
const SaqueController = require('../../src/controllers/SaqueController');
const saqueController = new SaqueController();


describe('Testes de saque no caixa eletronico', () => {

    test('Valor do Saque: R$ 30,00 – Resultado Esperado: Entregar 1 nota de R$20,00 e 1 nota de R$ 10,00.', async () => {
        const body = { 
            valor_saque: 30 
        };

        const resultadoEsperado = [{ 
            notas: [ 20, 10 ], 
            operacao: true
        }];

        const retorno = await saqueController.fazSaque(body);

        expect(retorno).toEqual(resultadoEsperado);
    });

    test('Valor do Saque: R$ 80,00 – Resultado Esperado: Entregar 1 nota de R$50,00 1 nota de R$ 20,00 e 1 nota de R$ 10,00.', async () => {
        const body = { 
            valor_saque: 80 
        };

        const resultadoEsperado = [{ 
            notas: [ 50, 20, 10 ], 
            operacao: true
        }];

        const retorno = await saqueController.fazSaque(body);

        expect(retorno).toEqual(resultadoEsperado);
    });

    test('Valor do Saque: R$ 5,00 – Resultado Esperado: O saque não pode ser realizado pois o valor solicitado é menor do que a menor nota disponivel.', async () => {
        const body = { 
            valor_saque: 5 
        };

        const resultadoEsperado = [{ 
            mensagem: "A cada saque voce pode retirar um valor entre R$10,00 e R$10.000,00.", 
            operacao: false
        }];

        const retorno = await saqueController.fazSaque(body);

        expect(retorno).toEqual(resultadoEsperado);
    });

    test('Valor do Saque: R$ 137,00 – Resultado Esperado: O saque não pode ser realizado pois o valor solicitado não é divisivel pelas notas disponiveis.', async () => {
        const body = { 
            valor_saque: 137 
        };

        const resultadoEsperado = [{ 
            mensagem: "Notas disponiveis: R$10, R$20, R$50 e R$100.", 
            operacao: false
        }];

        const retorno = await saqueController.fazSaque(body);

        expect(retorno).toEqual(resultadoEsperado);
    });


});