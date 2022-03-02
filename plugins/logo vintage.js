let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
response = args.join(' ').split('|')
if (!args[0]) throw '*Ingrese un texto*' 
let res = `https://api.reysekha.xyz/api/textpro/vintage?text=${response[0]}&text2=${response[1]}&apikey=apirey`
conn.sendFile(m.chat, res, 'error.jpg', `*Logo terminado*`, m, false)
}
handler.command = /^(logovintage)$/i
module.exports = handler
