//
const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
const gs = require('nekos.life')
const neko = new gs()

let handler  = async (m, { conn, text }) => {
if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw '*[ ⚠️ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable nsfw*'
pp = (await neko.sfw.nekoGif()).url
await sticker(false, pp, 'SFW Neko', author).then(gege => {
conn.sendMessage(m.chat, gege, 'stickerMessage', { quoted: m })
})
//if (!text) throw 'Uhm...Teksnya?'
}
handler.help = ['nekogif (sfw)']
handler.tags = ['wibu']
handler.command = /^nekogif$/i
handler.group = false
handler.private = false
handler.fail = null
module.exports = handler
