let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw '*Ingrese un texto*'
  let res = `https://bx-hunter.herokuapp.com/api/canvas/gura?apikey=FuckBitch&nama=${response[0]}`
  conn.sendFile(m.chat, res, 'error.jpg', `*Logo terminado*`, m, false)
}
handler.command = /^(logogura)$/i
module.exports = handler