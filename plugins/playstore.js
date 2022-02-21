let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
if (!text) return conn.reply(m.chat, '*Ingrese el nombre de alguna aplicación*', m)
let res = await fetch(`https://caliphapi.com/api/playstore/search?apikey=wVLiUzSa&q=${text}`)
let json = await res.json()
if (res.status !== 200) throw await res.text()
if (!json.status) throw json
let thumb = await (await fetch(json.result[0].icon)).buffer()
let hasil = `*── 「 PLAYSTORE 」 ──*
▢ *NOMBRE*: ${json.result[0].title}
▢ *APP ID*: ${json.result[0].appId}
▢ *DESARROLLADOR(A)*: ${json.result[0].developer}
▢ *ESTADO*: ${json.result[0].priceText}
▢ *PRECIO*: ${json.result[0].price}
▢ *RATING*: ${json.result[0].scoreText}
▢ *DESCRIPCIÓN*: ${json.result[0].summary}
▢ *LINK*:  
${json.result[0].url}`
conn.sendFile(m.chat, thumb, 'Error.jpg', hasil, m)}
handler.command = /^(playstore)$/i
module.exports = handler
