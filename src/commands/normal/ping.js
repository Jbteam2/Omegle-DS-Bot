const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const fs = require('fs');

module.exports = {
    name: "ping",
    aliases: ["pong"],
    cooldown: 5000,//1 saniye = 1000 ms / cooldown olmasını istemezseniz 0 yazın.
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
function setlists(FP, LI) {
  try {
      fs.writeFileSync(FP, JSON.stringify(LI, null, 2), 'utf8');
      console.log('List data updated and saved successfully.');
    } catch (error) {
      console.error('Error saving list data:', error);
    }
}
