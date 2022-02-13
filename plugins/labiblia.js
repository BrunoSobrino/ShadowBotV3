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
┣ ඬ⃟🔞 _${usedPrefix}video_
┣ ඬ⃟🔞 _${usedPrefix}imglesbians_
┣ ඬ⃟🔞 _${usedPrefix}porno_
┣ ඬ⃟🔞 _${usedPrefix}randomnsfw_
┣ ඬ⃟🔞 _${usedPrefix}pornogif_
┣ ඬ⃟🔞 _${usedPrefix}sideboobs_
┣ ඬ⃟🔞 _${usedPrefix}hentai_
┣ ඬ⃟🔞 _${usedPrefix}pene_
┣ ඬ⃟🔞 _${usedPrefix}ecchi_
┣ ඬ⃟🔞 _${usedPrefix}pussy_
┣ ඬ⃟🔞 _${usedPrefix}boobs_
┣ ඬ⃟🔞 _${usedPrefix}panties_
┣ ඬ⃟🔞 _${usedPrefix}nekogif_
┣ ඬ⃟🔞 _${usedPrefix}porno2_
┣ ඬ⃟🔞 _${usedPrefix}yaoi_
┣ ඬ⃟🔞 _${usedPrefix}yuri_
┣ ඬ⃟🔞 _${usedPrefix}yaoigif_
┣ ඬ⃟🔞 _${usedPrefix}yurigif_
┣ ඬ⃟🔞 _${usedPrefix}pack_
┣ ඬ⃟🔞 _${usedPrefix}pack2_
┣ ඬ⃟🔞 _${usedPrefix}pack3_
┣ ඬ⃟🔞 _${usedPrefix}loli2_
┣ ඬ⃟🔞 _${usedPrefix}muslos_
┣ ඬ⃟🔞 _${usedPrefix}muslitos_
┣ ඬ⃟🔞 _${usedPrefix}booty_
┣ ඬ⃟🔞 _${usedPrefix}htrap_
┣ ඬ⃟🔞 _${usedPrefix}furro_
┣ ඬ⃟🔞 _${usedPrefix}nsfwass_
┣ ඬ⃟🔞 _${usedPrefix}bdsm_
┣ ඬ⃟🔞 _${usedPrefix}cum_
┣ ඬ⃟🔞 _${usedPrefix}ero_
┣ ඬ⃟🔞 _${usedPrefix}femdom_
┣ ඬ⃟🔞 _${usedPrefix}foot_
┣ ඬ⃟🔞 _${usedPrefix}glass_
┣ ඬ⃟🔞 _${usedPrefix}yuri_
┣ ඬ⃟🔞 _${usedPrefix}yaoigif_
┣ ඬ⃟🔞 _${usedPrefix}yurigif_
┣ ඬ⃟🔞 _${usedPrefix}nsfwloli_
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
