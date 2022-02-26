let handler = async (m, { conn }) => {
let vn = './media/cancion2.mp3'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/gay', {
avatar: await conn.getProfilePicture(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
}), 'gay.png', '*Miren a este gay 🏳️‍🌈*', m)
conn.sendFile(m.chat, vn, 'baneado.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true })}
handler.command = /^(2gay)$/i
module.exports = handler
