import { Router } from "express"
import { Request, Response } from "express";
import { env } from "@/config/env";
import { headers } from "@/config/headers";

export const entitiesRouter = Router()

// Listar todas as unidades
entitiesRouter.get("/", async (request: Request, response: Response) => {
  const result = await fetch(`${env.HOST}/Entity?range=0-9999`, {
    method: "GET",
    headers: headers()
  })

  const data = await result.json()
  response.status(200).json(data)
})


// função ticket para listar chamados com unidades
export async function entities () {
  const result = await fetch(`${env.HOST}/Entity?range=0-9999`, {
    method: "GET",
    headers: headers()
  })

  const data = await result.json()
  return data
}