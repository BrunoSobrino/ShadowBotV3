const { ephoto3 } = require('../lib/ephoto3.js')
let handler = async(m, { conn, args, usedPrefix, text}) => {
if (!text) throw '*Y el texto..?*\n*Ingrese un texto*\n\n*Ejemplo:*\n*#logocorazon T y S*\n\n*Nota: El texto no puede ser mayor a 15 letras*'
if (text.length > 15) throw '*Uhm.. texto demasiado largo, ingrese un texto menor a 15 caracteres*'
let result = await ephoto3('https://en.ephoto360.com/text-heart-flashlight-188.html', `${text}`)
let uh = `https://s1.ephoto360.com${result.image}`
conn.sendFile(m.chat, uh,'p.jpg', '*_Dicen que le brillan los ojos cuando habla de ti_*', m,false, { thumbnail: Buffer.alloc(0) })}
handler.command = /^logocorazon|logocorazón|logoheart$/i
handler.fail = null
module.exports = handler
