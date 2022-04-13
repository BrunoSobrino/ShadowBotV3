let axios = require('axios');
let fetch = require('node-fetch')
let neko = require('nekos.life')
let Neko = new neko()
let handler  = async (m, { conn, args }) => {
if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw '*[ ⚠️ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable nsfw*'
json = (await axios.get('https://meme-api.herokuapp.com/gimme/sideboobs')).data
conn.sendFile(m.chat, json.url, 'boobs.jpg', json.title, m, false)
}
handler.help = ['sideboobs']
handler.tags = ['sange']
handler.command = /^sideboobs$/i
handler.fail = null
module.exports = handler
