# Trabalho Mario - Escola NodeJs

## Como executar

Para poder executar, é necessário ter um banco MySQL rodando na porta 3306. Se preferir, pode usar Docker para executar o sistema.

### Docker

Basta renomear a .env.exemplo para .env

```
docker compose up 
```

### Cli

Basta renomear o arquivo .env.exemplo para .env e colocar o endereço ip do banco para localhost, se estiver rodando localmente. E configurar os restantes dos dados

```
npm run start:dev
```

## Algumas das telas

### Home

![Home](./docs/home.png)

### Logado

![Home](./docs/logado.png)

### Aluno

#### Cadastrar alunos

![Cadastrar alunos](./docs/new_student.png)

#### Todos os alunos

![Todos os alunos](./docs/all_studants.png)

#### Editar aluno

![Editar aluno](./docs/edit_studant.png)

### Turma

#### Cadastrar turma

![Cadastrar turma](./docs/new_class.png)

#### Todas as turmas

![Todas as turmas](./docs/all_class.png)

#### Editar turma

![Editar turma](./docs/edit_class.png)

----
