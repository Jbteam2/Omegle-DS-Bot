const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const fs = require('fs');
const channelid = "1147865233172463617"

module.exports = {
    name: "ping",
    aliases: ["pong"],
    cooldown: 5000,
    run: async (client, message, args) => {
      user = getlists('./users.json')
      userid = message.author.id;
      z = 0
      for (var i = 0; i < user.length; i++) {
        if (user[i][0] === userid){
            z = i
      }}

      if (z===0) {
        const exampleEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Please use /setup to setup your account first!')
        .setTimestamp()
        .setFooter({ text: 'Developed by Oreo'});
        message.reply({ embeds: [exampleEmbed] })
      } else {
        if (!user[z][2]){
          const exampleEmbed = new EmbedBuilder()
          .setColor(0x0099FF)
          .setTitle('Please use /start first!')
          .setTimestamp()
          .setFooter({ text: 'Developed by Oreo'});
          message.reply({ embeds: [exampleEmbed] })
        } else {
          client.users.send(user[z][3], `Stranger: ${message.content}`);
          if (channelid != "") {
            const channel = await client.channels.cache.get(channelid)
            let user2 = client.users.cache.get(user[z][3]);
            const embed2 = new EmbedBuilder()
            .setColor("Orange")
            .addFields({ name: 'Member', value: `${message.author.username}`})
            .addFields({ name: 'Chat Command', value: `${message.content}`})
            .addFields({ name: 'Message to:', value: `${user2.username}`})
            .setTimestamp()
            .setFooter({ text: 'Developed By Oreo'})
            channel.send({ embeds: [embed2] });
        }
        }
      }
    }
 };

 function getlists(FP) {
  // Load existing list data
  let listData = [];
  try {
  const fileData = fs.readFileSync(FP, 'utf8');
  listData = JSON.parse(fileData);
  } catch (error) {
  console.error('Error loading list data:', error);
  }
  return listData
}