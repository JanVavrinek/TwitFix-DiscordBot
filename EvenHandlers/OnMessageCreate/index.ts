import { Client, Message } from "discord.js";

const REGEX = /(https?:\/\/(mobile.)?twitter\.com\/\S+\/status\/[0-9]+)/g;

/**
 * Handle messages and transforms Twitter embeds into TwitFix ones
 * @param msg
 * @param client
 */
const OnMessageCreate = (msg: Message, client: Client) => {
  if (msg.channel.type === "GUILD_TEXT" && msg.author.id !== client.user?.id) {
    const matches = msg.content.match(REGEX);
    const res = matches?.reduce(
      (p, c) =>
        `${p}${c
          .replace(/mobile\./, "") //remove mobile. from the link
          .replace("twitter", "fxtwitter") //replace twitter with fxtwitter
          .replace(/\/$/, "")}\n`, // remove trailing slash because otherwise the link doesn't work
      ""
    );
    if (res && res !== "") {
      msg.reply(res);
      msg.suppressEmbeds();
    }
  }
};
export default OnMessageCreate;
