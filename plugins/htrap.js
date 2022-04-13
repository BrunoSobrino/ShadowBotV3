let axios = require("axios")
let handler = async (m, { conn, usedPrefix, command }) => {
if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw '*[ ⚠️ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable nsfw*'
let res = await axios("https://api.waifu.pics/nsfw/trap")
let json = res.data
let url = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.send2ButtonImg(m.chat, url, "*UN TRAPITO <3*", '©The Shadow Borkers - Bot', '🥵 SIGUIENTE 🥵', `${usedPrefix + command}`, '🔥 LABIBLIA 🔥', `${usedPrefix}labiblia`, m, false, { contextInfo: { mentionedJid }}) }
handler.command = /^htrap$/i
module.exports = handler
