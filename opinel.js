require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

let hopes = 0;

client.once('ready', () => {
	console.log('Ready!');
	console.log('A Hope...');
    const opinel = client.channels.cache.get(process.env.CHANNEL);
    if(!opinel) return console.error("Opinel!");
    opinel.join().then(opinelle => {
        console.log("In Hell!");

        const replay = () => {
            hopes++;
            hopeinhell = opinelle.play(process.env.OPINEL);  
            
            hopeinhell.on('start', () => {
                console.log("A Hope In Hell "+hopes+"!");
            });
            
            hopeinhell.on('finish', () => {
                replay();
            });

            hopeinhell.on('error', console.error);
        }

        replay();
    }).catch(op => {
        console.log("In Hell.");
    })
});

client.login(process.env.TOKEN);