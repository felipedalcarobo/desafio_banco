## desafio caixa eletronico
- http://dojopuzzles.com/problemas/exibe/caixa-eletronico/

- DESENVOLVIDO COM NODE.JS

- Para resolver o problema ordenei as notas disponiveis no banco de dados, sendo da maior para a menor. Caso o valor solicitado seja o mesmo valor de uma das notas o sistema já retorna ela mesma, caso contrário entra num foreach das notas disponiveis. Dentro criei um while para que seja verificado se o valor solicitado é menor do que a nota, se for adiciono a nota num array, e rodará novamente o while caso o valor restante seja ainda menor do que a nota atual, caso contrário irá para a próxima e menor nota disponível.

### Ambiente de Desenvolvimento

- Sistema Operacional macOS Catalina - versão 10.15.5;
- Versão do NodeJs 12.18.2;
- Banco de Dados: sqlite3;
- Versão do BD 5.0.0;
- NPM;
- Yarn;
- VS Code;
- Insomnia 

### Sobre o teste unitário

- Utilizei o jest (https://jestjs.io/) para criar e rodar os teste unitários.


### Sobre a API

- usuário já cadastrado: 
{    
    "conta": 1,
	"senha": "12345"
}


- Para cadastrar usuário: http://localhost:3333/api/v1/cadastro
Metodo: POST

- - Dados:
- - {
- - 	"nome": "",
- - 	"senha": ""
- - }


- Para logar usuário: http://localhost:3333/api/v1/login
Metodo: POST

- - Dados:
- - {
- - 	"conta": ,
- - 	"senha": ""
- - }


- Para fazer um saque, pegar o token retornado após o login: http://localhost:3333/api/v1/saque
Metodo: POST
Bearer: Token

- - Dados:
- - {
- - 	"valor_saque": ,
- - }


- Para cadastrar notas: http://localhost:3333/api/v1/cadastro-nota
Metodo: POST

- - Dados:
- - {
- - 	"nota": ,
- - }


### Banco de Dados

- Arquivo sql do banco com dados: database/database.sqlite







