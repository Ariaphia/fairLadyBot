const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/5IJMu7a.gif',
  'https://2.bp.blogspot.com/-lbRMZ3Mme8I/WgeC3XPoe0I/AAAAAAAAAyw/AewlchdJPj4Hy46zmTB6CjUgKEqEkBDfgCLcBGAs/s1600/tumblr_omvj49wYnq1v8tshbo1_500.gif',
  'https://i.imgur.com/412gCq9.gif',
  'https://i.imgur.com/jsONTqf.gif',
  'https://i.imgur.com/AVwiP0d.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para consolar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('O tempo cura')
        .setColor('#ff0000')
        .setDescription(`${user} Daijoubu, daijoubu.`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('I am the consolation!')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}