let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command, text }) => {
if (!args[0]) throw `*Ingrese un enlace de YouTube*`
let res = await fetch("https://api.lolhuman.xyz/api/ytaudio?apikey=85faf717d0545d14074659ad&url="+args[0])
let json = await res.json()
conn.sendFile(m.chat, json.result.link.link, 'error.mp3', '', m, false, { mimetype: 'audio/mp4' })}
handler.command = /^(ytmp3.2?)$/i
module.exports = handler
