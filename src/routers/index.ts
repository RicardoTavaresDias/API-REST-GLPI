import { Router } from "express";
import { entitiesRouter } from "./entities-router"
import { searchRouter } from "./search-router"
import { sessionRouter } from "./session-router"
import { taskRouter } from "./task-router"
import { ticketRouter } from "./ticket-router"
import { sqlRouter } from "./backup";

export const http = Router()

http.use("/session", sessionRouter)
http.use("/ticket", ticketRouter)
http.use("/task", taskRouter)
http.use("/search", searchRouter)
http.use("/entities", entitiesRouter)
http.use("/backup", sqlRouter)


