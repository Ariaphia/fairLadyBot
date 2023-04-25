client.on("ready", () => {
    let activities = [
        `Default Prefix: [${config.prefix}]`,
        `${client.guilds.cache.size} servidores!`,
        `${client.channels.cache.size} canais!`,
        `${client.users.cache.size} usuários!`
      ],
      i = 0;
    setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
          type: "WATCHING"
        }), 1000 * 60); 
    client.user
        .setStatus("online")
        .catch(console.error),
  console.log("Fogueira acesa!")
  });