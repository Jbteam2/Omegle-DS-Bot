const config = require("../config.js")
const { Collection } = require("discord.js")

module.exports = {
	name: 'messageCreate',
	execute: async(message) => {
  let client = message.client;
  if (message.author.bot) return;
  if (message.channel.type != 1) return;
  let prefix = config.prefix
  if(!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g); 
  const cmd = "ping"
  if(cmd.length == 0 ) return;
  let command = client.commands.get(cmd)
  if(!command) command = client.commands.get(client.commandaliases.get(cmd));

  if(command) {
  command.run(client, message, args)
  }
  }};
