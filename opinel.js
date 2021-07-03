require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

let hopes = 0;

client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.TOKEN);

const hopein = (opin) => {
    console.log('A Hope...');
    const opinel = client.channels.cache.get(opin);
    if(!opinel) return console.error("Opineled!");
    opinel.join().then(opinelle => {
        console.log(opin+"> In Hell!");

        const replay = () => {
            hopes++;
            hopeinhell = opinelle.play(process.env.OPINEL);  
            
            hopeinhell.on('start', () => {
                console.log(opin+"> A Hope In Hell "+hopes+"!");
            });
            
            hopeinhell.on('finish', () => {
                replay();
            });

            hopeinhell.on('error', console.error);
        }

        replay();
    }).catch(op => {
        console.log("In Hell.");
    });
}

client.on('message', async message => {
    if((message.author.id == process.env.ADRI || message.author.id == process.env.POULET)
        && message.content == '!opinel' && message.member.voice.channel) {
        hopein(message.member.voice.channel.id);
    }
});