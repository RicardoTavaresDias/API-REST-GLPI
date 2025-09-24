import z from "zod"

const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  APPTOKEN: z.string(),
  AUTHORIZATION: z.string(),
  HOST: z.url()
})

const env = envSchema.parse(process.env)

export { env }