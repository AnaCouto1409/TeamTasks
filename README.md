# ProjetoM4-API-Rest
 
 Projeto de conclusão do módulo 4 da Resilia Educação.
 O projeto consiste em uma API nos padrões REST e DAO, visa fazer requisições http e obter as respostas em formato JSON.
 
 
 # Tecnologias
 
 Usamos o Node.js para consturir a API e os pacotes utilizados para o desenvovimento foram: Express, Cors, fs, Fastest-validator, HTTPs, sqlite, squlite3.
 O aplicativo foi hospedado no heroku 'https://projeto-m4.herokuapp.com/'
 
 # Como usar
 

 * Instalar pacotes (dependências)

```
$npm install
```
 
 
 # Rotas
/alunos;

/funcionarios;

/financeiro;

# METODOS 
 * GET
 * GET COM ID
 * POST
 * PUT
 * DELETE 

# Exemplos de retorno
exemplo de rota get ('/'alunos)
```
https://projeto-m4.herokuapp.com/alunos
	{
		"id_aluno": 1,
		"nome_completo": "testeaaaaa",
		"email": "teste@teste.com",
		"bairro": "teste",
		"tipo_habilitacao": "teste"
	}
```
exemplo de rota get com parametros ('/'rota/id)

```
segue o funcionarios atualizado pelo insomnia

https://projeto-m4.herokuapp.com/funcionarios



{
{"id_funcionario":4,
"nome_completo":"Valdery",
"email":"val@gmail.com","celular":123,
"cargo":"professor",
"bairro":"teste","
periodo":"teste","admissao":"1000/02/20"

}
```
https://projeto-m4.herokuapp.com/financeiro
[

{"id_financeiro":2,
"descricao":"teste",
"entrada":123,"saida":123,
"validacao":123"
},

"id_financeiro":3,
"descricao":"teste",
"entrada":123,
"saida":123,
"validacao":123
}
]


# Colaboradora
Ana Carolina Ribeiro da Silva Couto

# Operações CRUD-API
Feito em  React

