import { Client, GatewayIntentBits, Partials } from "discord.js"

export const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.GuildMembers
  ],
  partials: [Partials.Channel]
})
