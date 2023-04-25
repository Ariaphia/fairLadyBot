const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/3zjCpK4.gif',
  'https://i.imgur.com/0OXmR4S.gif',
  'https://i.imgur.com/5uqC9aQ.gif',
  'https://i.imgur.com/CT8B8RS.gif',
  'https://i.imgur.com/Y3bIT38.gif',
  'https://i.imgur.com/dxYX7je.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para abraçar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Posso te dar um abraço?')
        .setColor('#ff0000')
        .setDescription(`${message.author} abraçou ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('I am the Sympathy!')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}