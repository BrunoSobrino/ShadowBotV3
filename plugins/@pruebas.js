let fetch = require('node-fetch')

let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `uhm.. y el enlace?\n\nUso correcto:\n${usedPrefix + command} url\nEjemplo:\n${usedPrefix + command} https://vt.tiktok.com/ZGJBtcsDq/`
if (!/https?:\/\/(www\.|v(t|m)\.|t\.)?tiktok\.com/i.test(text)) throw `url erroneo!`
let res = await fetch(API('apialc', '/api/download/tiktok', { url: text }, 'apikey'))
if (!res.ok) throw 'error'
let json = await res.json()
if (!json.status) throw json
conn.sendFile(m.chat, json.videoHD, 'tiktok.mp4', json.deksripsi, m)}

//handler.help = ['dltiktok + url']
handler.command = /^(dltiktok)$/i
module.exports = handler
