const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media1.tenor.com/images/5da0296acddf0f76f9bac59967a24fab/tenor.gif?itemid=17179878',
  'https://i.pinimg.com/originals/46/8a/a2/468aa2a896304b32a5930020f685ee97.gif',
  'https://64.media.tumblr.com/7987cffe6c48fbf9e35efb8b0ab986a4/tumblr_pau37caiCV1rjrmhwo1_540.gif',
  'https://i.imgur.com/EFLUE6S.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Café? Eu quero!')
        .setColor('#ff0000')
        .setDescription(`${message.author} está aproveitando seu café.`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('I am the Milk!')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}