const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/C01gT1h.gif',
  'https://i.imgur.com/ZOuH3Mx.gif',
  'https://i.imgur.com/OkhC94F.gif',
  'https://i.imgur.com/dYvAmEw.gif',
  'https://i.imgur.com/Uky4IaD.gif',
  'https://i.imgur.com/Tjpoqt4.gif',
  'https://i.imgur.com/slZbKIc.gif',
  'https://i.imgur.com/tLp6ECa.gif',
  'https://i.imgur.com/EdjhG0g.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para bater!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Violência gera Violência!')
        .setColor('#ff0000')
        .setDescription(`${message.author} deu um tapa em ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('I am the Chaos!')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}