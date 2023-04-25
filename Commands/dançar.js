const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/EaOUiN7.gif',
  'https://i.imgur.com/FtkvFOM.gif',
  'https://i.imgur.com/Ld37ezm.gif',
  'https://i.imgur.com/72pTrOd.gif',
  'https://i.imgur.com/iNZtGMs.gif',
  'https://i.imgur.com/ekKcN0L.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para dançar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Mexe essa bunda aí!')
        .setColor('#ff0000')
        .setDescription(`${message.author} dançou com ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('I am the Music!')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}