const axios = require('axios')
let handler = async(m, { conn }) => {
if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw '*[ ⚠️ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable nsfw*'
let porn = await axios.get('https://meme-api.herokuapp.com/gimme/pussy')
conn.sendFile(m.chat, `${porn.data.url}`, '', `${porn.data.title}`, m)
}
handler.help = ['pussy']
handler.tags = ['images']
handler.command = /^(pussy)$/i
handler.fail = null
handler.exp = 0
module.exports = handler
