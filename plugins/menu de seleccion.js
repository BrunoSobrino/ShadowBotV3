/*
let fs = require('fs')
let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants, args }) => {
let vn = './media/menu.mp3'
const rows = [
//LO QUE SE MUESTRA + DESCRIPCION + COMANDO 
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
{title: 'MENU', description: "Te manda el menu del Bot", rowId:"/menu"},
]
const sections = [{title: "ELIGE UNA OPCIÓN", rows: rows}]
const button = {
buttonText: 'SELECCIONE UNA OPCIÓN',
description: "NOMBRE DEL BOT\nY/O LA INFORMACIÓN QUE QUIERA AGREGAR\n\n*THE SHADOW BROKERS - BOT*",
sections: sections,
listType: 1
//NOTA: PARA HACER UN SALTO DE LINEA DE USA \n 
//NOTA 2: EL COMANDO PARA PEDIR ESTE MENU ES #wamenu
//NOTA 3: PARA ACTIVAR ESTE COMANDO DEBES ELIMINAR LOS /* DEL INICIO Y EL */ /* DEL FINAL DE ESTE CODIGO
}  
conn.sendMessage(m.chat, button, MessageType.listMessage)
await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
}
handler.command = /^wamenu$/i
handler.fail = null
module.exports = handler
*/