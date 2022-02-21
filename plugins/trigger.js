const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let wanted = global.API('https://some-random-api.ml', '/canvas/triggered', {
avatar: await conn.getProfilePicture(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),})
let stiker = await sticker(null, wanted, 'Trigger', '©The Shadow Brokers - Bot')
conn.sendMessage(m.chat, stiker, MessageType.sticker, {
quoted: m})}
handler.command = /^(trigger)$/i
module.exports = handler
