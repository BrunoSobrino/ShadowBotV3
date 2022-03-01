let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de The Shadow Borkers - Bot*

*➤ Grupos oficiales del Bot:*
*1.- https://chat.whatsapp.com/JlomZPEgo3bLmzjGUYPfyJ*

*2.- https://chat.whatsapp.com/DbXBmsydWBE1ZN3EoY0hRs*

*3.- https://chat.whatsapp.com/BW0P22xx7EGBTdH5IM851F*

*4.- https://chat.whatsapp.com/FwEUGxkvZD85fIIp0gKyFC*

*5.- https://chat.whatsapp.com/H7NUXdrGlFg20ae3bqgwlb*

*6.- https://chat.whatsapp.com/GvrLSUSzVuT9P17CKfdxDa*

*7.- https://chat.whatsapp.com/HylyPaLc49b9DWF67K8pdc*
`.trim() 
conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 THE SHADOW BROKERS - BOT 🔥*', 'status@broadcast')}
handler.command = /^(grupos|gruposofc|gruposofc)$/i
module.exports = handler
