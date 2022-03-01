let R = Math.random
let Fl = Math.floor
let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.jid)
let a = ps[Fl(R() * ps.length)]
let b
do b = ps[Fl(R() * ps.length)]
while (b === a)
m.reply(`*🔰 Vamos a hacer algunas amistades 🔰*\n\n*Oye ${toM(a)} hablale al privado a ${toM(b)} para que jueguen y se haga una amistad 🙆*\n\n*Las mejores amistades empiezan con un juego 😉*`, null, {
contextInfo: {
mentionedJid: [a, b],
}})}
handler.command = ['amigo','amigorandom','amistad']
handler.group = true
module.exports = handler
