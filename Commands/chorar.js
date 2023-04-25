const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media1.tenor.com/images/4bb996f5c99d48faf8590d8c66396065/tenor.gif?itemid=7552065',
  'https://pa1.narvii.com/6191/a18f40b1a06492528ff7ca25cc322030c4be0848_00.gif',
  'https://pa1.narvii.com/6995/4cda128fed4f195e60c981e5953416b364860ee9r1-500-282_hq.gif',
  'https://i.pinimg.com/originals/4e/65/cb/4e65cb677a08150e0e90cb69358ef5f4.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Chorar lava a alma!')
        .setColor('#ff0000')
        .setDescription(`${message.author} está se sentindo triste.`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('I am the Loneliness!')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}