require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
	console.log('A Hope...');
    const opinel = client.channels.cache.get(process.env.CHANNEL);
    if(!opinel) return console.error("Opinel!");
    opinel.join().then(opinelle => {
        console.log("In Hell!");

        const hopeinhell = opinelle.play(process.env.OPINEL);

        hopeinhell.on('start', () => {
            console.log("A Hope In Hell!");
        })

        hopeinhell.on('finish', () => {
            opinelle.play(process.env.OPINEL);
        })

        hopeinhell.on('error', console.error);
    }).catch(op => {
        console.log("In Hell.");
    })
});

client.login(process.env.TOKEN);