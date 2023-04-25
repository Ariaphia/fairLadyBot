const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/kRuzOXZ.gif',
  'https://i.imgur.com/6L0lj7n.gif',
  'https://i.imgur.com/rzAj1Tx.gif',
  'https://i.imgur.com/fCAyxSb.gif',
  'https://i.imgur.com/YxnruGT.gif',
  'https://i.imgur.com/tXey9Rv.gif',
  'https://i.imgur.com/K3BohEe.gif',
  'https://i.imgur.com/1TXRHqI.gif',
  'https://i.imgur.com/NwcsFl9.gif',
  'https://i.imgur.com/GfqoEPG.gif',
  'https://i.imgur.com/i8bnXKP.gif',
  'https://i.imgur.com/yui9sBC.gif',
  'https://data.whicdn.com/images/328564406/original.gif',
  'https://static.zerochan.net/Sword.Art.Online%3A.Alicization.full.2747859.gif',
  'https://i.imgur.com/cX9ndwz.gif',
  'https://i.imgur.com/oWaxaxN.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para encher de porrada!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Cai dentro!')
        .setColor('#ff0000')
        .setDescription(`${message.author} atacou ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('I am the War!')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}