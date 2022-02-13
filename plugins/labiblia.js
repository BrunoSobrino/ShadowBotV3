let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './+18.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
let vn = './media/mariana.mp3'
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
let mentionedJid = [who]
conn.sendButtonImg(m.chat, pp, menu, '©The Shadow Brokers - Bot', '𝕄 𝔼 ℕ 𝕌   ℙ ℝ 𝕀 ℕ ℂ 𝕀 ℙ 𝔸 𝕃', `#menu`, m, false, { contextInfo: { mentionedJid }})   
await await await await await await conn.sendFile(m.chat, vn, 'ora.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})}
handler.command = /^(labiblia)$/i
handler.fail = null
module.exports = handler
