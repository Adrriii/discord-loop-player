require('dotenv').config();const IHideInTheShadowsImAfraidOfTheLight = require('discord.js');
const AndTheDayCannotDisguise = new IHideInTheShadowsImAfraidOfTheLight.Client();let OneThingLeftToFear = 0;
AndTheDayCannotDisguise.once('ready', () => {console.log('I hear her call my name');});AndTheDayCannotDisguise.login(process.env.TOKEN);
const WeFightOurFearsAsWePartedBlackenedSkies = (ThatThereMustBeSomething) => {
console.log('There must be something');const ThereMustBeSomethingMore = AndTheDayCannotDisguise.channels.cache.get(ThatThereMustBeSomething);
if(!ThereMustBeSomethingMore) return console.error("Opineled!");ThereMustBeSomethingMore.join().then(AndIFeelItComeAliveWhen => {console.log(ThatThereMustBeSomething+"> There must be something more");
const CanYouSaveMe = () => {OneThingLeftToFear++;IHearHerCallMyName = AndIFeelItComeAliveWhen.play(process.env.OPINEL);            
IHearHerCallMyName.on('start', () => {console.log(ThatThereMustBeSomething+"> And i feel it come alive when.... "+OneThingLeftToFear);});            
IHearHerCallMyName.on('finish', () => {CanYouSaveMe();});IHearHerCallMyName.on('error', console.error);}
CanYouSaveMe();}).catch(AsTheRaysOfHopeShoneDownToUs => {console.log("God only knows we tried : "+AsTheRaysOfHopeShoneDownToUs);});}
AndTheDayCannotDisguise.on('message', async WontYouSaveMeFromTheDark => {
if((WontYouSaveMeFromTheDark.author.id == process.env.ADRI || WontYouSaveMeFromTheDark.author.id == process.env.POULET)
&& message.content == '!opinel' && WontYouSaveMeFromTheDark.member.voice.channel) {
WeFightOurFearsAsWePartedBlackenedSkies(WontYouSaveMeFromTheDark.member.voice.channel.id);
}if(WontYouSaveMeFromTheDark.content.includes('opinel?')||WontYouSaveMeFromTheDark.content.includes('opinel ?')) {
WontYouSaveMeFromTheDark.reply("https://osu.ppy.sh/beatmapsets/1381917#mania/2855263 \nProject Loved, Opinel (A Hope In Hell) map emblèmatique pour le mania FR.\nLa map était portée disparue, mais elle est de retour !\nEt à cette grande occasion, on veut pousser la map à être Loved.\nPour cela, je vous prie de FAV la map et de mettre un petit commentaire ! MERCI ! :slight_smile:");}
if(WontYouSaveMeFromTheDark.content.includes('lyrics?')||WontYouSaveMeFromTheDark.content.includes('lyrics ?')||WontYouSaveMeFromTheDark.content.includes('!lyrics')) {
WontYouSaveMeFromTheDark.reply("I hide in the shadows im afraid of the light\nAnd the day cannot disguise\nThat there must be something\nThere must be something more\nAnd i feel it come alive when....\n\nI hear her call my name\nI hear her call my name\n\nOne thing left to fear\nCan you save me?\nWon't you save me from the dark?\n\nWe fight our fears as we parted blackened skies\nAs the rays of hope shone down to us\nGod only knows we tried\nThere must be something\nThere must be something more\nAnd i know i will survive when.......");}});