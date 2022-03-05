const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')

let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)
  let stiker = false
  let q = m.quoted ? m.quoted : m
  let img = './src/adios.webp'
  stiker = await sticker(img, false, global.packname, global.author)

  if (chat.antiLink && isGroupLink) {
    await m.reply(`*「 ANTI LINKS 」*\n*Hasta la vista baby👋, ${await this.getName(m.sender)} rompiste las reglas serás exterminado....!!*`)
    await m.reply(`*Tienes 3 segundos para eliminar el link y retractarte...!!!!*`)
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m})
    if (isAdmin) return m.reply('*Te salvaste cagon(a) eres admin, no puedo eliminarte :v*')
    if (!isBotAdmin) return m.reply('*El bot no es admin, no puede exterminar a las personas*')
    let linkGC = ('https://chat.whatsapp.com/' + await this.groupInviteCode(m.chat))
    let isLinkThisGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkThisGc.test(m.text)
    if (isgclink) return m.reply('*Lol.. enviaste el enlace de este grupo :v*')
    await this.groupRemove(m.chat, [m.sender])
  }
  return true
}

module.exports = handler
