let handler = async (m, { conn }) => {
let fetch = require('node-fetch')
let res = await fetch("https://api-alc.herokuapp.com/api/other/frases?apikey=ConfuMods")
let json = await res.json()
let { frase } = json
conn.reply(m.chat, `*┏━━━━━━━━━━━━━━━━┓*\n*┠❧  ${frase}*\n*┗━━━━━━━━━━━━━━━━┚*`, m)}
handler.command = /^(frase|frases|frace|fraces)$/i
module.exports = handler
