# Iniciar projeto
npm i
# Criar uma migration
npm run migration:create < coloque o nome da tabela >
# Mostrar as migrations
npm run migration:show
# Rodar as migrations
npm run migration:run
# Deletar as tabelas no migration
npm run migration:revert
# Passos a seguir
* Em DBTable, criar a constate dos nomes das tabelas
* Criar migration
* Rodar migration
* Criar entidade
* Adicionar entidade em data-source.ts
* Fazer o controller da entidade
* Fazer o DTO da entidade
* Fazer as rotas da entidade
* Adicionar caminho das rotas no app.ts