const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    // Comando de help usando embed com paginas por reacao criado por <@551658291474989076>

        
    let arrFun = ["atacar", "cafe", "coinflip", "consolar", "chorar", "dançar", "abraçar", "beijar", "bater"].map(c => `\`${c}\``) // Comandos de diversao que seu bot tem, coloque cada comando que seu bot tem entre " "
    let fun = arrFun.join('\n')
    let arrUtil = ["ajuda", "avatar", "botinfo", "ideia", "serverinfo", "userinfo"].map(c => `\`${c}\``) // Comandos de utilidade que o bot tem
    let Util = arrUtil.join('\n')
    const embed = new Discord.MessageEmbed()
        .setAuthor(`Guia de comandos do bot fair Lady!`)
        .addField('🎲 Entretenimento e diversão', `${arrFun.slice(0, 3)} \`...\``)
        .addField('⚙️ Utilidades', `${arrUtil.slice(0, 3)} \`...\``)
        .setFooter(message.author.tag, message.author.displayAvatarURL())
        .setColor('#ff0000')
        .setTimestamp()
    const msg = await message.channel.send(embed)
        
    const emojis = ['🎲', '⚙️', '🔙']

    emojis.forEach(async emoji => await msg.react(emoji))
        
        
    const funEmbed = new Discord.MessageEmbed()
        .setDescription(fun)
        .setFooter(message.author.tag, message.author.displayAvatarURL())
        .setTimestamp()
        
    const utilEmbed = new Discord.MessageEmbed()
        .setDescription(Util)
        .setFooter(message.author.tag, message.author.displayAvatarURL())
        .setTimestamp()
        
        
    const filter = (reaction, user) => emojis.includes(reaction.emoji.name) && user.id == message.author.id

    const embedChange = async (embedName) => {
        await msg.edit(embedName)
        msg.reactions.cache.forEach(r => r.users.remove(message.author))
    }

        const collector = msg.createReactionCollector(filter, {time: 5 * 60 * 1000})
        collector.on('collect', async r => {
            switch (r.emoji.name) {
                case '🎲':
                    embedChange(funEmbed)
                    break
                case '⚙️':
                    embedChange(utilEmbed)
                    break
                case '🔙':
                    embedChange(embed)
                    break
            }
        })

}