let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
response = args.join(' ').split('|')
if (!args[0]) throw '*Ingrese un texto*'
let res = `https://bx-hunter.herokuapp.com/api/canvas/gfx3?apikey=FuckBitch&text1=${response[0]}&text2=${response[1]}`
conn.sendFile(m.chat, res, 'error.jpg', `SAD BOY`, m, false)
}
handler.command = /^(logosad)$/i
module.exports = handler
