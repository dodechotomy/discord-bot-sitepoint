require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
    msg.channel.send('pong');

  }
});

bot.on("voiceStateUpdate", (oldMember, newMember)=> { 
  let oldVoice = oldMember.voiceChannelID; 
  let newVoice = newMember.voiceChannelID; 
  if (oldVoice != newVoice) {
    if (oldVoice == null) {
      console.log("User joined!");
      bot.channels.get("test").send(newMember + ' joined voice chat.');
    }
  }
});
