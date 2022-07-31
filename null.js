const { Client } = Discord = require('discord.js-selfbot-v13');
const { joinVoiceChannel } = require("@discordjs/voice");
const nullbase = require("./ayarlar.json");
let client = global.client = new Client({
    intents: [32767],
    checkUpdate: false,

});


for (let index = 0; index < nullbase.userTOKEN.length; index++) {
    const token = nullbase.userTOKEN[index];
    client.login(token);
    client.on('ready', async () => {
    const VoiceChannel = client.channels.cache.get(nullbase.seskanalları[index]);
    joinVoiceChannel({
        channelId: VoiceChannel.id,
        guildId: VoiceChannel.guild.id,
        adapterCreator: VoiceChannel.guild.voiceAdapterCreator,
        selfDeaf: true
    });
    client.user.setStatus("idle");
    console.log(`${client.user.tag} olarak giriş yapıldı.`);
    });
}
