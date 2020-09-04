

module.exports = class CaixaEletronicoModel 
{
    retorna_notas(valor_saque) 
    {
        var array_notas = [];
        var notas = [10,50,20,100];
        var notasOrdenadas = notas.sort((a, b) => {
            return b - a
        });
        var soma_notas = 0;

        if(notasOrdenadas.includes(valor_saque)) 
        {
            soma_notas = valor_saque;
            array_notas[array_notas.length] = valor_saque;
            return [{ notas: array_notas, erro: false }];
        } 
        else 
        {
            notasOrdenadas.forEach(function(nota, i) 
            {
                var continua = true;
                while(continua) 
                {
                    if(nota <= valor_saque) 
                    {
                        soma_notas = soma_notas + nota;
                        valor_saque = valor_saque - nota;
                        array_notas[array_notas.length] = nota;
                        continua = true;
                    } 
                    else 
                    {
                        continua = false;
                    }
                }
            });

            if(valor_saque == 0)
            {
                return [{ notas: array_notas, erro: false }];
            }
        }
    }
};