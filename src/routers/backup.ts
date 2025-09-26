import mysqldump from 'mysqldump';
import { Router } from 'express';
import { Request, Response } from 'express';

export const sqlRouter = Router()

sqlRouter.get("/", async  (request: Request, response: Response) => {
  await mysqldump({
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'glpi-user',
        password: 'glpi-pass',
        database: 'glpi',
    },
    dumpToFile: './dump.sql',
  })

  response.status(200).json({ message: "Backup Concluido!" })
})

// Deletar e recriar o banco
// docker exec -i banco-glpi mysql -u glpi-user -pglpi-pass -e "DROP DATABASE glpi; CREATE DATABASE glpi;"

/*
  ⚠️ Aqui o dump.sql precisa estar na mesma pasta de onde você roda o comando (ou passar caminho completo).

  docker exec -i banco-glpi mysql -u glpi-user -pglpi-pass glpi < dump.sql
*/