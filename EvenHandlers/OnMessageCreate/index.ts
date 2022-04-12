import { Client, Message } from "discord.js";

const REGEX = /(https?:\/\/twitter\.com\/\S+\/status\/[0-9]+)/g;

/**
 * Handle messages and transforms Twitter embeds into TwitFix ones
 * @param msg
 * @param client
 */
const OnMessageCreate = (msg: Message, client: Client) => {
  if (msg.channel.type === "GUILD_TEXT" && msg.author.id !== client.user?.id) {
    const matches = msg.content.match(REGEX);
    const res = matches?.reduce(
      (p, c) => `${p}${c.replace("twitter", "fxtwitter").replace(/\/$/, "")}\n`, //replace twitter with fxtwitter and then remove trailing slash
      ""
    );
    if (res && res !== "") {
      msg.reply(res);
      msg.suppressEmbeds();
    }
  }
};
export default OnMessageCreate;
