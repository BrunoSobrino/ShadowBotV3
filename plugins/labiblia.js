let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let fakeImage = 'https://raw.githubusercontent.com/BrunoSobrino/ShadowBotV3/master/Menu2.jpg'
let safusimage = 'https://raw.githubusercontent.com/BrunoSobrino/ShadowBotV3/master/Menu2.jpg'
let fakeMessage = 'Bruno Sobrino'
const { MessageType } = require('@adiwajshing/baileys')
let path = require('path')
let util = require('util')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
let prep = await conn.prepareMessage(m.chat, fs.readFileSync('./+18.jpg'), MessageType.image, {})
let idd = prep.message
let pp = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
//await conn.reply(m.chat, '*[ ⚠️ ] Cargando menú...*\n\n*[❗] Si no puede visualizar el menú, use el comando /menu1.2*')
  let username = conn.getName(who)
  let vn = './media/ora.mp3'
let menu =`
╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *✨𝗛ola, ${username}!!*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡✯✯✯✯✯✯✯✯╞══╯
┏━━━━━━━━━━━━━┓
┃ *<MENU +18/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟ℹ️️ _${usedPrefix}video_
┣ ඬ⃟ℹ️️ _${usedPrefix}imglesbians_
┣ ඬ⃟ℹ️️ _${usedPrefix}porno_
┣ ඬ⃟ℹ️ _${usedPrefix}randomnsfw_
┣ ඬ⃟ℹ️ _${usedPrefix}pornogif_
┣ ඬ⃟ℹ️ _${usedPrefix}sideboobs_
┣ ඬ⃟ℹ️️ _${usedPrefix}hentai_
┣ ඬ⃟ℹ️️ _${usedPrefix}pene_
┣ ඬ⃟ℹ️️ _${usedPrefix}ecchi_
┣ ඬ⃟ℹ️️ _${usedPrefix}pussy_
┣ ඬ⃟ℹ️️ _${usedPrefix}boobs_
┣ ඬ⃟ℹ️️ _${usedPrefix}panties_
┣ ඬ⃟ℹ️️ _${usedPrefix}nekogif_
┣ ඬ⃟ℹ️️ _${usedPrefix}porno2_
┣ ඬ⃟ℹ️️ _${usedPrefix}yaoi_
┣ ඬ⃟ℹ️️ _${usedPrefix}yuri_
┣ ඬ⃟ℹ️️ _${usedPrefix}yaoigif_
┣ ඬ⃟ℹ️️ _${usedPrefix}yurigif_
┣ ඬ⃟ℹ️️ _${usedPrefix}pack_
┣ ඬ⃟ℹ️️ _${usedPrefix}pack2_
┣ ඬ⃟ℹ️️ _${usedPrefix}pack3_
┣ ඬ⃟ℹ️️ _${usedPrefix}loli2_
┣ ඬ⃟ℹ️ _${usedPrefix}muslos_
┣ ඬ⃟ℹ️ _${usedPrefix}muslitos_
┣ ඬ⃟ℹ️ _${usedPrefix}booty_
┣ ඬ⃟ℹ️️ _${usedPrefix}htrap_
┣ ඬ⃟ℹ️️ _${usedPrefix}furro_
┣ ඬ⃟ℹ️️ _${usedPrefix}nsfwass_
┣ ඬ⃟ℹ️️ _${usedPrefix}bdsm_
┣ ඬ⃟ℹ️️ _${usedPrefix}cum_
┣ ඬ⃟ℹ️️ _${usedPrefix}ero_
┣ ඬ⃟ℹ️️ _${usedPrefix}femdom_
┣ ඬ⃟ℹ️️ _${usedPrefix}foot_
┣ ඬ⃟ℹ️️ _${usedPrefix}glass_
┣ ඬ⃟ℹ️️ _${usedPrefix}yuri_
┣ ඬ⃟ℹ️️ _${usedPrefix}yaoigif_
┣ ඬ⃟ℹ️️ _${usedPrefix}yurigif_
┣ ඬ⃟ℹ️️ _${usedPrefix}nsfwloli_
┗━━━━━━━━━━━━━┛`.trim()
 const buttons = [{buttonId: 'id1', buttonText: {displayText: 'Sexo🥵'}, type: 1}, {buttonId: '#menu', buttonText: {displayText: '🔰Menu'}, type: 1}]
  let id = Object.keys(idd)[0]
  const buttonMessage = {[id]: prep.message[id], contentText: menu, footerText: 'The Shadow Brokers - Bot', buttons: buttons, headerType: 'IMAGE'}
  conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage, { quoted: {key: { participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast' }, message: { orderMessage: { itemCount: 44342, status: 999, thumbnail: await (await fetch(safusimage)).buffer(), surface: 999, message: '𝕃 𝔸  𝔹 𝕀 𝔹 𝕃 𝕀 𝔸', orderTitle: 'iOfficial', sellerJid: '0@s.whatsapp.net'}}}}, { contextInfo: { mentionedJid: [m.sender]}})
conn.sendFile(m.chat, vn, 'ora.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}}
handler.command = /^(labiblia)$/i
handler.fail = null
module.exports = handler
