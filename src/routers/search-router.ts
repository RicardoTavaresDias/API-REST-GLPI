import { Router } from "express"
import { Request, Response } from "express";
import { env } from "@/config/env";
import { headers } from "@/config/headers";

export const searchRouter = Router()

// Buscar Chamados pelo titulo e pelo descrição da tarefa => Search
searchRouter.get("/", async (request: Request, response: Response) => {
  const result =  await fetch(
    `${env.HOST}/search/Ticket?
    criteria[0][field]=1&
    criteria[0][searchtype]=contains&
    criteria[0][value]=teste&
    criteria[1][link]=AND&
    criteria[1][field]=26&
    criteria[1][searchtype]=contains&
    criteria[1][value]=2025-09-09
    `.trim(), {
    method: "GET",
    headers: headers()
  })

  const data = await result.json()

  // Para pegar o numero de chamado => data.data[0]['2']
  response.status(200).json(data)
})