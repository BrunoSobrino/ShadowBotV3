let fetch = require('node-fetch')
let handler  = async (m, { conn, usedPrefix, command }) => {
if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw '*[ ⚠️ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable nsfw*'
heum = await fetch(`https://api-alc.herokuapp.com/api/nsfw/yuri2?apikey=ConfuMods`)
json = await heum.buffer()
conn.sendButtonImg(m.chat, json, '*Disfrutalo!!*', '©The Shadow Brokers - Bot', 'SIGUIENTE', `${usedPrefix + command}`, m, false)}
handler.command = /^(yuri)$/i
module.exports = handler
