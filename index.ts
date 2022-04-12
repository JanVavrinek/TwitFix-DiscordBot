import "dotenv/config";
import { Client } from "discord.js";
import OnMessageCreate from "./EvenHandlers/OnMessageCreate";
import OnReady from "./EvenHandlers/OnReady";

const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
  partials: ["MESSAGE", "CHANNEL"],
});

client.on("ready", () => {
  OnReady(client);
});

client.on("messageCreate", (msg) => {
  OnMessageCreate(msg, client);
});
client.login(process.env.TOKEN);
