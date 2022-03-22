let handler = async (m, { conn, text }) => {
if (!text) throw '*[❗️] Estas usando mal el comando!!*\n*Ejemplo de uso:*\n*#ytcomment Suscríbete al canal oficial*'
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/youtube-comment', {
avatar: await conn.getProfilePicture(m.sender).catch(_ => ''),
comment: text,
username: conn.getName(m.sender)
}), 'Error.png', '*¡Aquí esta tu comentario de YouTube!*', m)
}
handler.command = /^ytcomentario|ytcomentar|ytcomment$/i
module.exports = handler
