import * as dotenv from "dotenv"
import { client } from "./client-data"
import { AddPermission } from "./controllers/add-permission"
import { DefaultFunc } from "./controllers/defaultFunc"

dotenv.config()

const { TOKEN_BOT_DISCORD: TOKEN } = process.env

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.login(TOKEN)

client.on("messageCreate", DefaultFunc)
// client.on("messageCreate", AddPermission)
