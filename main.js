require('dotenv').config();

const discordjs = require('discord.js');
const discordclient = new discordjs.Client();

let counter = 0;
discordclient.once('ready', () => {
	console.log('The bot is ready.');
});

discordclient.login(process.env.TOKEN);

const handlechannel = (channelID) => {
	console.log('Hooking to channel '+channelID+'...');

	const currentChannel = discordclient.channels.cache.get(channelID);

	if (!currentChannel) return console.error('Could not hook to '+channelID);

	currentChannel.join().then(currentChannelHandler => {
		console.log(channelID + '> Starting to play');
		const loop = () => {
			counter++;
			audioPlayerHandler = currentChannelHandler.play(process.env.AUDIOFILE);
			audioPlayerHandler.on('start', () => {
				console.log(channelID + '> Iteration n°' + counter);
			});
			audioPlayerHandler.on('close', () => {
				loop();
			});
			audioPlayerHandler.on('error', console.error);
		}
		loop();
	}).catch(e => {
		console.log("Error while trying to join the channel : " + e);
	});
}
discordclient.on('message', async messageEvent => {
	if ((messageEvent.author.id == process.env.ADRI || messageEvent.author.id == process.env.POULET) &&
		messageEvent.content == '!'+process.env.CMD && messageEvent.member.voice.channel) {
		handlechannel(messageEvent.member.voice.channel.id);
	}
});