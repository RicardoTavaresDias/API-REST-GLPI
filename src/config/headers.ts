import { env } from "@/config/env"
import { session_token } from "@/routers/session-router"

function headers() {
  return {
    'Content-Type': "application/json",
    'App-Token' : env.APPTOKEN,
    'Session-Token': session_token
  }
}

export { headers }