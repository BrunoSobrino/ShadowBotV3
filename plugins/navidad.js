const axios = require('axios')
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/Christmas")
let json = res.data
let ShadowBot = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.sendButtonImg(m.chat, ShadowBot, "*Navidad 🧑‍🎄*", '©The Shadow Borkers - Bot', '🎄 SIGUIENTE 🎄', `${usedPrefix + command}`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(navidad)$/i
module.exports = handler
