global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/JlomZPEgo3bLmzjGUYPfyJ' , 'https://chat.whatsapp.com/DbXBmsydWBE1ZN3EoY0hRs' , 'https://chat.whatsapp.com/BW0P22xx7EGBTdH5IM851F' , 'https://chat.whatsapp.com/FwEUGxkvZD85fIIp0gKyFC' , 'https://chat.whatsapp.com/H7NUXdrGlFg20ae3bqgwlb'] // No tiene utilidad 
global.channelYT = ['https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA'] // No tiene utilidad
global.owner = ['50585901139'] // Cambia los numeros por tu o tus numeros a los cuales te comtactaran y gestionaras el Bot
global.mods = ['5219992095479' , '972557048356'] // No tiene utilidad
global.prems = ['5219996125657' , '5219991402134'] // No tiene utilidad

// Nota: Puedes contactarme si necesitas ayuda con algo al +5219996125657 (este es mi numero personal/real bloqueo personas que no sean temas de la instalación)
// => Solo dudas sobre la instalación, temas generales contactarme al +17722386341 o al +14503280343
// => NO ayudo a hacer Bots, ni crearlos, ni editarlos 
// - Haré tutoriales de como editar el Bot, los videos los podran encontrar en mi canal de YouTube en https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA

global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'http://hardianto-chan.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'F3bOrWzY',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': 'rey2k21'
}

// Sticker WM
global.packname = '(☞ﾟ∀ﾟ)☞'
global.author = 'The Shadow Brokers - Bot'


//global.wait = '*Esperé un momento..*'


global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
