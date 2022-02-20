const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')
let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn, args, usedPrefix, command }) => {
let stiker = false
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (/webp|image|video/g.test(mime)) {
if (/video/g.test(mime)) if ((q.msg || q).seconds > 11) return m.reply('*⚠ El video debe de ser de maximo 7 segundos*')
let img = await q.download()
if (!img) throw `*[ ⚠ ] ️Error vuelva a intentarlo, recuerde responder a la imagen, video o gif con ${usedPrefix + command}*`
let out
try {
if (/webp/g.test(mime)) out = await webp2png(img)
else if (/image/g.test(mime)) out = await uploadImage(img)
else if (/video/g.test(mime)) out = await uploadFile(img)
stiker = await sticker(false, out, global.packname, global.author)
} catch (e) {
console.error(e)
stiker = await sticker(img, false, global.packname, global.author)
}} else if (args[0]) {
if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
else return m.reply('*[ ⚠ ] Link (enlace) invalido...*\n*[❗] Inserte un link de una imagen de google en terminación .jpg o .png o .gif*\n*Ejemplo:*\n*#s https://i.pinimg.com/originals/2f/73/98/2f73987ee094e909771abdd00d45d75b.gif*')
}} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
quoted: m})
else throw `*[ ⚠ ] ️La conversión ha fallado..*\n*[❗] Vuelva a intentarlo, responda a una imagen, video o gif con ${usedPrefix + command}*\n*[❗] Si el video rebasa los 7 segundos puede dar problemas al crear el sticker*`}}
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i
module.exports = handler
const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}
