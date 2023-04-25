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
        .setImage("https://i.imgur.com/TyPthAj.gif")
        .setDescription(`Seja bem-vindo(a) ao nosso servidor **${member.user}**! Atualmente estamos com **${member.guild.memberCount} membros**. Aproveite das nossas funcionalidades e divirta-se acima de tudo! `)
        .addField('Canais', 'Leia as <#734450763467849869> para ficar por dentro de como funciona nosso servidor.')
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
        .setFooter("QUE AS CHAMAS GUIEM VOCÊ!")
        .setTimestamp();
  
      channel.send(embed);
    }
  });