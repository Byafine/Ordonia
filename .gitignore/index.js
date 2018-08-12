const discord = require('discord.js');

const client = new discord.Client();

var prefix = "/";

client.login("NDc1NzI5NTE3MDA5MzA1NjAw.DkjTtw.i7zEjmuCEDNCg1Zx-cmGGnJcrEk");


client.on("ready" , () => {
    console.log("Je suis prêt !");
    client.user.setGame("/aide");
});
