﻿# ProjetoM4-API-Rest
 
 Projeto de conclusão do módulo 4 da Resilia Educação.
 O projeto consiste em uma API nos padrões REST e DAO, visa fazer requisições http e obter as respostas em formato JSON.
 
 
 # Tecnologias
 
 Usamos o Node.js para consturir a API e os pacotes utilizados para o desenvovimento foram: Express, Cors, fs, Fastest-validator, HTTPs, sqlite, squlite3.
 O aplicativo foi hospedado no heroku 'https://projeto-m4.herokuapp.com/'
 
 # Como usar
 
 * Clonar o repositório:
 ```
 $git clone https://github.com/GuilhermeSantiago25/ProjetoM4-AP-Rest.git
 ```
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
https://projeto-m4.herokuapp.com/funcionarios/2
{
	"id_funcionario": 2,
	"nome_completo": "teste",
	"email": "teste",
	"celular": 123,
	"cargo": "teste",
	"bairro": "teste",
	"periodo": "teste",
	"admissao": "1000/02/20"
}
```

# Colaboradores
Ana Carolina Ribeiro da Silva Couto

