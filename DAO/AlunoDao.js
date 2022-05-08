export default class AlunoDAO {

    constructor(db) {
        this.db = db;
    }

    async listarAluno() {
        return await new Promise((resolve, reject) => {
            this.db.all(`SELECT * FROM Aluno`, (error, result) => {
                if (error) {
                    return reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    }

    async selectAluno(id) {
        return await new Promise((resolve, reject) => {
            this.db.get(`SELECT * FROM Aluno WHERE ID = ?`, [id], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    }

    async insertAluno(funcionario) {
        return await new Promise((resolve, reject) => {
            this.db.run(`INSERT INTO Aluno (nome, cpf, idade, ocupacao, telefone) VALUES (?,?,?,?,?)`, [nome.nome, nome.cpf, nome.idade, aluno.ocupacao, aluno.telefone], (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(`Aluno inserido com sucesso`);
                }
            })
        })
    }

    async updateAluno(funcionario) {
        return await new Promise((resolve, reject) => {
            this.db.run(`UPDATE Aluno SET nome = ?, cpf = ?, idade = ?, ocupacao = ?, telefone = ? WHERE id = ?`, [aluno.nome, aluno.cpf, aluno.idade, aluno.ocupacao, aluno.telefone, aluno.id], (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(`Aluno atualizado com sucesso`);
                }
            })
        })
    }

    async deleteAluno(id) {
        return await new Promise((resolve, reject) => {
            this.db.run(`DELETE FROM Aluno WHERE ID = ?`, [id], (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(`Aluno removido com sucesso`);
                }
            })
        })
    }

}