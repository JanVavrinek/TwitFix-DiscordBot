import { Client, Message } from "discord.js";

const PING = /\?[a-z]{2,}\s/g;

/**
 * Simple ping command
 * @param createdAt The date when the message was created
 * @returns `difference ms` formatted message
 */
const ping = (createdAt: Date) => {
  const now = new Date();
  return `\`${now.getTime() - createdAt.getTime()} ms\``;
};

/**
 * handle messages and perform commands
 */
const OnCommand = (msg: Message, client: Client) => {
  if (msg.mentions.members?.find((m) => m.id === client.user?.id)) {
    const match = msg.content.match(PING);
    if (match?.includes("?ping ")) {
      msg.channel.send(ping(msg.createdAt));
    }
  }
};

export default OnCommand;
