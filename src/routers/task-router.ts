import { Router } from "express"
import { Request, Response } from "express";
import { Task } from "@/types";
import { env } from "@/config/env";
import { headers } from "@/config/headers";

export const taskRouter = Router()

// Listar todas as tarefas do chamado 21 => ?order=DESC = para ordenar resultado
taskRouter.get("/", async (request: Request, response: Response) => {
  const result = await fetch(`${env.HOST}/Ticket/21/TicketTask?order=DESC`, {
    method: "GET",
    headers: headers()
  })

  const data = await result.json() as Task[]
  const task = data.map(value => ({ tarefa: value.content, data: value.date }))
  
  response.status(200).json(task)
})


// Tramitar chamado Tarefa
taskRouter.post("/", async (request: Request, response: Response) => {
  const result = await fetch(`${env.HOST}/TicketTask`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      input: {
        tickets_id: 21, // numero de chamado
        content: "TESTE tudo bem esta tudo certo agora!", // descrição da tarefa do chamado
        users_id: 2 // user GLPI
      }
    })
  })

  const data = await result.json()
  response.status(200).json(data)
})