import express from "express"
import { http } from "@/routers"

const app = express()
app.use(express.json())
app.use(http)

export { app }