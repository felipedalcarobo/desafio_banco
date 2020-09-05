

module.exports = class CaixaEletronicoModel 
{
    // funcao principal com logica para retorno das notas
    retorna_notas(valor_saque) 
    {
        var soma_notas = 0;
        var array_notas = [];
        var notas = [10,50,20,100];
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

    
};