import { Router } from "express"
import { Request, Response } from "express";
import { entities } from "./entities-router"
import { env } from "@/config/env";
import { headers } from "@/config/headers";
import { EntitiesType, TicketRaw } from "@/types";

export const ticketRouter = Router()

// Lista todos os chamados 
ticketRouter.get("/", async (request: Request, response: Response) => {
  const result = await fetch(`${env.HOST}/Ticket`, {
    method: "GET",
    headers: headers()
  })

  const data = await result.json() as TicketRaw[]

  // Listar todas as unidades
  const dataUnits = await entities() as EntitiesType[]

  const ticketAll = data.map(value => {
    const entity  = dataUnits.find(unit => unit.id === value.entities_id)

    return {
      id: value.id,
      id_entities: value.entities_id,
      entities: entity ? entity.name : null,
      title: value.name,
      description: value.content,
      date: value.date
    }
  })

  response.status(200).json(ticketAll)
})


// Abrir chamados => Ticket
ticketRouter.post("/", async (request: Request, response: Response) => {
  const result = await fetch(`${env.HOST}/Ticket`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
        input: {
        entities_id: 93, // ID do unidade
        itilcategories_id: 2, // Acompanhamento Diario Rotina de Backup
        type: 2,  // Requisição
        requesttypes_id: 1,  // Helpdesk
        global_validation: 1,  // Infraestrutura
        name: "teste final titulo", // Titulo do chamado
        content: "teste final descrição", // descrição do chamado
        _users_id_requester: 0, // ATOR Requerente
        _users_id_assign: 0,  //  ATOR Atribuído Usuario
        _groups_id_assign: 1 //  ATOR Atribuído grupo
      }
    })
  })

  const data = await result.json()
  response.status(201).json(data)
})


// Adicionar solução
ticketRouter.post("/closeCalled", async (request: Request, response: Response) => {
  const result = await fetch(`${env.HOST}/Ticket/45/ITILSolution`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      input: {
        items_id:  45,
        itemtype: "Ticket",
        status: 1,
        content: "Chamado resolvido após atualização do sistema."
      }
    })
  })

  const data = await result.json()
  response.status(201).json(data)
})

// Aprovar solução automaticamente
ticketRouter.post("/validationCalled", async (request: Request, response: Response) => {
  const result = await fetch(`${env.HOST}/Ticket/45/TicketValidation`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      input: {
        items_id:  45,
        users_id_validate: 2, // id do usuário que valida,
        status: 2, // Aceito
        comment_submission: "Solução aprovada automaticamente."
      }
    })
  })

  const data = await result.json()
  response.status(201).json(data)
})