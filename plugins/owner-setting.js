let handler = async (m, { conn, command, args }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let chats
if (/group|gc/i.test(args[0])) chats = conn.chats.array.filter(v => v.jid.endsWith('g.us') && !v.pin).map(v => v.jid)
else if (/chat|private/i.test(args[0])) chats = conn.chats.array.filter(v => v.jid.endsWith('.net') && !v.pin).map(v => v.jid)
else if (/all/i.test(args[0])) chats = conn.chats.array.filter(v => v.jid && !v.pin).map(v => v.jid)
else chats = [m.chat]
let isDelete = /^(clear|delete)/i.test(command)
for (let id of chats) {
if (isDelete) conn.modifyChat(id, 'delete', {
includeStarred: false
}).catch(console.log)
conn.modifyChat(id, 'mute', -Math.floor(new Date / 1e3) * 1e3 - 1e3).catch(console.log)}
conn.reply(m.chat, '*Terminado y realizado con éxito ✅*', m, false, { contextInfo: { mentionedJid }})
}
handler.help = ['deletechat', 'deletechat chat', 'deletechat group', 'deletechat all', 'mutechat', 'mutechat chat', 'mutechat group', 'mutechat all']
handler.command = /^(clear|delete|mute)chat$/i
handler.premium = true
handler.fail = null
module.exports = handler
