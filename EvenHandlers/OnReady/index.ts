import { Client } from "discord.js";

/**
 * Handle ready event, display log message
 * @param client
 */
const OnReady = (client: Client) => {
  if (client) {
    console.log(`Logged in as ${client.user?.tag}!`);
  } else {
    console.log("Not logged in!");
  }
};
export default OnReady;
