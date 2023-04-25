const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos

client.on("guildMemberAdd", async (member) => { 

  let guild = await client.guilds.cache.get("733491132813541478"); //ID do servidor
  let channel = await client.channels.cache.get("734438605832847480"); //ID do canal
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === 'Purple_Fire');
  if (guild != member.guild) {
    return console.log("Sem boas-vindas pra você! Você não pertence a este servidor.");
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("#ff0000")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`${emoji} | Boas-vindas a fair Community! | ${emoji}`)
      .setImage("https://i.imgur.com/5dZ7rl9.gif")
      .setDescription(`Seja bem-vindo(a) ao nosso servidor **${member.user}**! Atualmente estamos com **${member.guild.memberCount} membros**. Aproveite das nossas funcionalidades e divirta-se acima de tudo! `)
      .addField('Canais', 'Leia as <#734450763467849869> para ficar por dentro de como funciona nosso servidor.')
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter("QUE AS CHAMAS GUIEM VOCÊ!")
      .setTimestamp();

    channel.send(embed);
   }
});

client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix)) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});

client.on("ready", () => {
  let activities = [
      `Lost Izalith.`,
      `Default Prefix: [${config.prefix}]`,
      `em ${client.guilds.cache.size} servidores!`,
      `em ${client.channels.cache.size} canais!`,
      `com ${client.users.cache.size} usuários!`
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "PLAYING"
      }), 1000 * 60); 
  client.user
      .setStatus("online")
      .catch(console.error),
console.log("Fogueira acesa!")
});

client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token