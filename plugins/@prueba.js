let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!text) throw `*Formato de uso: ${usedPrefix + command} https://tiktokxxxx*\n*Ejemplo:*\n*${usedPrefix + command} https://vm.tiktok.com/ZMLUb9M5j/*`
let res = await fetch("https://api-alc.herokuapp.com/api/download/play-mp4?query="+text+"&apikey=ConfuMods")
let json = await res.json()
conn.sendFile(m.chat, json.link, 'error.mp4', `   *Aqui tienes el tiktok*\n_The Shadow Brokers - Bot_`, m)}
handler.command = /^(play6)$/i
module.exports = handler
