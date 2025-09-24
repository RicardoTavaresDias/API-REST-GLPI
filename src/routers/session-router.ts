import { Router } from "express"
import { Request, Response } from "express";
import { GLPISessionResponse } from "@/types";
import { env } from "@/config/env";

export const sessionRouter = Router()
export let session_token: string

// Session => Login
sessionRouter.post("/", async (request: Request, response: Response) => {
  const result = await fetch(`${env.HOST}/initSession`, {
    method: "POST",
    headers: {
      'Content-Type': "application/json",
      'App-Token' : env.APPTOKEN,
      'Authorization': env.AUTHORIZATION
    },
    body: JSON.stringify({
      login: 'glpi',
      senha: 'glpi'
    })
  })

  const data: GLPISessionResponse = await result.json() as GLPISessionResponse;
  session_token = data.session_token
  response.status(200).json(data)
})