const axios = require('axios')
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/Furryporn")
let json = res.data
let url = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.send2ButtonImg(m.chat, url, "*¿Si me pongo de perrito, me adoptas? 🔥🥴*", '©The Shadow Borkers - Bot', '🥵 SIGUIENTE 🥵', `${usedPrefix + command}`, '🔥 LABIBLIA 🔥', `${usedPrefix}labiblia`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(furry|furro|furr@|furra|furrys|furros|furr@s|furras|furri|furris)$/i
module.exports = handler
