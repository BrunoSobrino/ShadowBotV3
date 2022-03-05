let util = require('util')
let path = require('path')
let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
let handler = async (m, { conn }) => {
handler.before = async function (m, { user, isBotAdmin, isAdmin, conn }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)
  let stk = './src/adios.webp'
  let sticker = './src/adios.webp'

  if (chat.antiLink && isGroupLink) {
    await m.reply(`*「 ANTI LINKS 」*\n*Hasta la vista baby👋, ${await this.getName(m.sender)} rompiste las reglas serás exterminado....!!*`)
    await m.reply(`*Tienes 3 segundos para eliminar el link y retractarte...!!!!*`)
    await conn.sendFile(m.chat, stk, 'adios.webp', null, m, { type: 'MessageType.location', location: true })
    await conn.sendFile(m.chat, sticker, 'adios.webp', null, m, { type: 'MessageType.location', location: true })
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
}  

module.exports = handler
