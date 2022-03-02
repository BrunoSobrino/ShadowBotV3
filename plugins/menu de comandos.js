//NO MODIFIQUES EL NÚMERO DEL CREADOR NI EL NOMBRE.. SOLO AGREGA LA INFORMACIÓN QUE TU QUIERAS O EDITALO A TU MANERA PERO DEJANDO LOS CREDITOS <3 
//PUEDES AGREGAR OTRA FILAS DE PAYPAL, GRUPOS, PERO DEJA ALGUNOS CREDITOS, YA QUE ES LA UNICA MANERA DE INGRESOS DEL BOT
//SI VAS A MODIFICAR TODO Y HACER PASAR COMO SI FUERA TU BOT (CREADO POR TI) SOLO TE PIDO QUE SI ESTA EN TUS POSIBILIDADES DONES UN POCO
//LLEVO AL REDEDOR DE 1 AÑO Y MEDIO EN LA ELABORACION DE ESTE BOT, SI TU LO EDITAS EN UNA SEMANA NO ERES TU EL CREADOR, SI LO EDITAS TOTALMENTE A TU MANERA SERIA UTULIZADO MI BOT COMO BASE Y AHI SI LO SERIAS  

let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
//let vn = './media/mariana.mp3'
let menu =`
╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║═ *𝐓𝐡𝐞 𝐒𝐡𝐚𝐝𝐨𝐰 𝐁𝐫𝐨𝐤𝐞𝐫𝐬 - 𝐁𝐨𝐭*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *✨𝗛ola, ${username}!!*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *Creador del Bot: Bruno Sobrino* 
║➤ *Numero del creador:* *wa.me/17722386341 (No Bot)*
║➤ *PayPal:* *https://www.paypal.me/TheShadowBrokers133*
║➤ *Numero del Bot oficial:* *wa.me/5219991402134*
║➤ *Numero del Sub Bot oficial:* *wa.me/5219992095479*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡✯✯✯✯✯✯✯✯╞══╯
┏━━━━━━━━━━━━━┓
┃ *<INFORMACIÓN|MENUS/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟ℹ️️ _${usedPrefix}sc_
┣ ඬ⃟ℹ️️ _${usedPrefix}donar_
┣ ඬ⃟ℹ️️ _${usedPrefix}infobot_
┣ ඬ⃟ℹ️️ _${usedPrefix}grupos_
┣ ඬ⃟ℹ️ _${usedPrefix}instalarbot_
┣ ඬ⃟ℹ️ _${usedPrefix}menusimple_
┣ ඬ⃟ℹ️️ _${usedPrefix}menuaudios_
┣ ඬ⃟ℹ️️ _${usedPrefix}menu2_
┣ ඬ⃟ℹ️️ _${usedPrefix}labiblia_
┣ ඬ⃟ℹ️ _${usedPrefix}estado_
┣ ඬ⃟ℹ️ _¿Qué es un Bot?_
┣ ඬ⃟ℹ️ _Codigos para audios_
┣ ඬ⃟ℹ️ _Términos y condiciones_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<REPORTA FALLOS EN ALGÚN COMANDO/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ Reporta cualquier comando que falle para poder solucionarlo
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟📬 _${usedPrefix}bug *comando con fallas*_
┣ ඬ⃟📬 _${usedPrefix}report *comando con fallas*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<UNE UN BOT A TU GRUPO/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🤖 _${usedPrefix}join *link del grupo*_ 
┣ ඬ⃟🤖 _${usedPrefix}bots_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<TOPS/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🎖️ _${usedPrefix}top10gays_
┣ ඬ⃟🎖️ _${usedPrefix}toplind@s_
┣ ඬ⃟🎖️ _${usedPrefix}topput@s_
┣ ඬ⃟🎖️ _${usedPrefix}toppajer@s_
┣ ඬ⃟🎖️ _${usedPrefix}topotakus_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<NUMERO DEL CREADOR/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟👻 _${usedPrefix}owner_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<JUEGOS/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🕹 _${usedPrefix}math *modo*_
┣ ඬ⃟🎮 _${usedPrefix}ttt *nombre del la sala*_
┣ ඬ⃟🕹 _${usedPrefix}delttt *nombre del la sala*_
┣ ඬ⃟🎮 _${usedPrefix}2gay *@tag*_
┣ ඬ⃟🕹 _${usedPrefix}gay *@tag / nombre*_
┣ ඬ⃟🎮 _${usedPrefix}lesbi *@tag / nombre*_
┣ ඬ⃟🕹 _${usedPrefix}pajero *@tag / nombre*_
┣ ඬ⃟🎮 _${usedPrefix}pajera *@tag / nombre*_
┣ ඬ⃟🕹 _${usedPrefix}puta *@tag / nombre*_
┣ ඬ⃟🎮 _${usedPrefix}puto *@tag / nombre*_
┣ ඬ⃟🕹 _${usedPrefix}rata *@tag / nombre*_
┣ ඬ⃟🎮 _${usedPrefix}manco *@tag / nombre*_
┣ ඬ⃟🕹 _${usedPrefix}manca *@tag / nombre*_
┣ ඬ⃟🎮 _${usedPrefix}formarpareja_
┣ ඬ⃟🕹 _${usedPrefix}dado_
┣ ඬ⃟🎮 _${usedPrefix}simsimi *texto*_
┣ ඬ⃟🕹 _${usedPrefix}formartrio_
┣ ඬ⃟🎮 _${usedPrefix}love *@tag / nombre*_
┣ ඬ⃟🕹 _${usedPrefix}amigorandom_
┣ ඬ⃟🎮 _${usedPrefix}slot *cantidad*_
┣ ඬ⃟🕹 _${usedPrefix}ppt *piedra / papel / tijera*_
┣ ඬ⃟🎮 _${usedPrefix}prostituta *@tag / nombre*_
┣ ඬ⃟🕹 _${usedPrefix}prostituto *@tag / nombre*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<DESCARGAS/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟📥 _${usedPrefix}imagen *texto*_
┣ ඬ⃟📥 _${usedPrefix}ytsearch *texto*_
┣ ඬ⃟📥 _${usedPrefix}dlaudio *link yt*_
┣ ඬ⃟📥 _${usedPrefix}dlvid *link yt*_
┣ ඬ⃟📥 _${usedPrefix}ytmp3 *link yt*_
┣ ඬ⃟📥 _${usedPrefix}ytmp4 *link yt*_
┣ ඬ⃟📥 _${usedPrefix}play *titulo del audio*_
┣ ඬ⃟📥 _${usedPrefix}play2 *titulo del video*_
┣ ඬ⃟📥 _${usedPrefix}play3 *titulo del audio/video*_
┣ ඬ⃟📥 _${usedPrefix}letra *nombredelacanción*_
┣ ඬ⃟📥 _${usedPrefix}google *texto*_
┣ ඬ⃟📥 _${usedPrefix}googlef *texto*_
┣ ඬ⃟📥 _${usedPrefix}wikipedia *palabra clave*_
┣ ඬ⃟📥 _${usedPrefix}pinterestvideo *link de pinterest*_
┣ ඬ⃟📥 _${usedPrefix}tiktokaudio *link del tiktok*_
┣ ඬ⃟📥 _${usedPrefix}tiktok *link*_
┣ ඬ⃟📥 _${usedPrefix}spotify *autor, cancion*_
┣ ඬ⃟📥 _${usedPrefix}acortar *link*_
┣ ඬ⃟📥 _${usedPrefix}pinterest *texto*_
┣ ඬ⃟📥 _${usedPrefix}xnxx *link de xnxx*_
┣ ඬ⃟📥 _${usedPrefix}xnxxsearch *texto*_
┣ ඬ⃟📥 _${usedPrefix}ssweb *link*_
┣ ඬ⃟📥 _${usedPrefix}igstory *username*_
┣ ඬ⃟📥 _${usedPrefix}igstalk *username*_
┣ ඬ⃟📥 _${usedPrefix}animeinfo *nombre del anime*_
┣ ඬ⃟📥 _${usedPrefix}twvid *link de video de twitter*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<GESTION DE GRUPOS/>* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟💎 _${usedPrefix}admins *texto*_ 
┣ ඬ⃟💎 _${usedPrefix}añadir *numero*_ 
┣ ඬ⃟💎 _${usedPrefix}sacar @tag_
┣ ඬ⃟💎 _${usedPrefix}save *@tag + nombre de contacto*_
┣ ඬ⃟💎 _${usedPrefix}daradmin *@tag*_
┣ ඬ⃟💎 _${usedPrefix}quitaradmin *@tag*_
┣ ඬ⃟💎 _${usedPrefix}grupo *abrir / cerrar*_
┣ ඬ⃟💎 _${usedPrefix}enable welcome_
┣ ඬ⃟💎 _${usedPrefix}disable welcome_
┣ ඬ⃟💎 _${usedPrefix}enable antilink_
┣ ඬ⃟💎 _${usedPrefix}disable antilink_
┣ ඬ⃟💎 _${usedPrefix}enable antilink2_
┣ ඬ⃟💎 _${usedPrefix}disable antilink2_
┣ ඬ⃟💎 _${usedPrefix}enable delete_
┣ ඬ⃟💎 _${usedPrefix}disable  delete_ 
┣ ඬ⃟💎 _${usedPrefix}link_
┣ ඬ⃟💎 _${usedPrefix}notificar *texto*_
┣ ඬ⃟💎 _${usedPrefix}setname *Nuevo nombre del grupo*_
┣ ඬ⃟💎 _${usedPrefix}setdesc *Nueva descripción del grupo*_
┣ ඬ⃟💎 _${usedPrefix}infogrupo_
┣ ඬ⃟💎 _${usedPrefix}invocar *texto*_
┣ ඬ⃟💎 _${usedPrefix}del *responder a un mensaje del bot*_
┣ ඬ⃟💎 _${usedPrefix}fantasmas_
┣ ඬ⃟💎 _${usedPrefix}banchat_
┣ ඬ⃟💎 _${usedPrefix}unbanchat_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<CREADORES/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🧧 _${usedPrefix}s_
┣ ඬ⃟🧧 _${usedPrefix}sticker_
┣ ඬ⃟🧧 _${usedPrefix}semoji_
┣ ඬ⃟🧧 _${usedPrefix}wasted_
┣ ඬ⃟🧧 _${usedPrefix}stonks_
┣ ඬ⃟🧧 _${usedPrefix}trash_
┣ ඬ⃟🧧 _${usedPrefix}rainbow_
┣ ඬ⃟🧧 _${usedPrefix}circle_
┣ ඬ⃟🧧 _${usedPrefix}trigger_
┣ ඬ⃟🧧 _${usedPrefix}stickermaker_
┣ ඬ⃟🧧 _${usedPrefix}attp *texto*_
┣ ඬ⃟🧧 _${usedPrefix}style *texto*_
┣ ඬ⃟🧧 _${usedPrefix}attp2 *texto*_
┣ ඬ⃟🧧 _${usedPrefix}stickerfilter_
┣ ඬ⃟🧧 _${usedPrefix}trigger *@tag*_
┣ ඬ⃟🧧 _${usedPrefix}mp3 *responde a un video*_
┣ ඬ⃟🧧 _${usedPrefix}img *responde a un sticker*_
┣ ඬ⃟🧧 _${usedPrefix}blur *responde a una imagen*_
┣ ඬ⃟🧧 _${usedPrefix}swm *link de imagen de google*_
┣ ඬ⃟🧧 _${usedPrefix}gif *responde a un sticker/video*_
┣ ඬ⃟🧧 _${usedPrefix}tovideo *responde a una nota de voz*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<RANDOM|EXTRAS/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟👾 _${usedPrefix}futbol_
┣ ඬ⃟👾 _${usedPrefix}Messi_
┣ ඬ⃟👾 _${usedPrefix}animal_
┣ ඬ⃟👾 _${usedPrefix}meme_
┣ ඬ⃟👾 _${usedPrefix}meme2_
┣ ඬ⃟👾 _${usedPrefix}meme3_
┣ ඬ⃟👾 _${usedPrefix}cat_
┣ ඬ⃟👾 _${usedPrefix}dog_
┣ ඬ⃟👾 _${usedPrefix}pikachu_
┣ ඬ⃟👾 _${usedPrefix}waifu_
┣ ඬ⃟👾 _${usedPrefix}blackpink_
┣ ඬ⃟👾 _${usedPrefix}reto_
┣ ඬ⃟👾 _${usedPrefix}verdad_
┣ ඬ⃟👾 _${usedPrefix}imagenrandom_
┣ ඬ⃟👾 _${usedPrefix}neko_
┣ ඬ⃟👾 _${usedPrefix}lolivid_
┣ ඬ⃟👾 _${usedPrefix}iqtest_
┣ ඬ⃟👾 _${usedPrefix}kpopitzy_
┣ ඬ⃟👾 _${usedPrefix}navidad_
┣ ඬ⃟👾 _${usedPrefix}loli_
┣ ඬ⃟👾 _${usedPrefix}gawrgura_
┣ ඬ⃟👾 _${usedPrefix}miku_
┣ ඬ⃟👾 _${usedPrefix}nyan_
┣ ඬ⃟👾 _${usedPrefix}pat_
┣ ඬ⃟👾 _${usedPrefix}itachi_
┣ ඬ⃟👾 _${usedPrefix}slap_
┣ ඬ⃟👾️ _${usedPrefix}pat_
┣ ඬ⃟👾 _${usedPrefix}perfil_
┣ ඬ⃟👾 _${usedPrefix}scan_
┣ ඬ⃟👾 _${usedPrefix}kpop_
┣ ඬ⃟👾 _${usedPrefix}qr *texto*_
┣ ඬ⃟👾 _${usedPrefix}afk *motivo*_
┣ ඬ⃟👾 _${usedPrefix}CristianoRonaldo_
┣ ඬ⃟👾 _${usedPrefix}pregunta *pregunta*_
┣ ඬ⃟👾 _${usedPrefix}mention *texto*_
┣ ඬ⃟👾 _${usedPrefix}spamchat *texto*_
┣ ඬ⃟👾 _${usedPrefix}traducir es *texto*_
┣ ඬ⃟👾 _${usedPrefix}zodiac *AAAA MM DD*_
┣ ඬ⃟👾 _${usedPrefix}readmore *texto1| texto2*_
┣ ඬ⃟👾 _${usedPrefix}calc *expresión matemática*_ 
┣ ඬ⃟👾 _${usedPrefix}spamwa *numero|texto|cantidad*_
┣ ඬ⃟👾 _${usedPrefix}readqr *responde a un código QR*_
┣ ඬ⃟👾 _${usedPrefix}anime *random / waifu / husbu /neko*_
┣ ඬ⃟👾 _${usedPrefix}subirestado *texto / responder video, imagen o gif*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<COMANDOS +18/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ Usar bajo su responsabilidad 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🔞 _${usedPrefix}labiblia_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<EFECTOS PARA NOTAS DE VOZ O AUDIOS/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ Responde a un audio o nota de voz
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🎤 _${usedPrefix}bass_
┣ ඬ⃟🎤 _${usedPrefix}deep_
┣ ඬ⃟🎤 _${usedPrefix}earrape_
┣ ඬ⃟🎤 _${usedPrefix}fast_
┣ ඬ⃟🎤 _${usedPrefix}fat_
┣ ඬ⃟🎤 _${usedPrefix}nightcore_
┣ ඬ⃟🎤 _${usedPrefix}reverse_
┣ ඬ⃟🎤 _${usedPrefix}robot_
┣ ඬ⃟🎤 _${usedPrefix}slow_
┣ ඬ⃟🎤 _${usedPrefix}smooth_
┣ ඬ⃟🎤 _${usedPrefix}vibracion *cantidad*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<AUDIOS/>* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🔊 _${usedPrefix}menu2_
┣ ඬ⃟🔊 _${usedPrefix}menuaudios_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<CHAT ANONIMO/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟📳 _${usedPrefix}start_
┣ ඬ⃟📳 _${usedPrefix}next_
┣ ඬ⃟📳 _${usedPrefix}leave_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<CONVIERTETE EN BOT/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🏷 _${usedPrefix}stop_
┣ ඬ⃟🏷 _${usedPrefix}jadibot_
┣ ඬ⃟🏷 _${usedPrefix}getcode_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<LOGOS PERSONALIZADOS/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟📝️ _${usedPrefix}logos_ (lista)
┣ ඬ⃟📝️ _${usedPrefix}lolice_
┣ ඬ⃟📝️ _${usedPrefix}simpcard_
┣ ඬ⃟📝️ _${usedPrefix}hornycard_ 
┣ ඬ⃟📝️ _${usedPrefix}lblackpink_
┣ ඬ⃟📝️ _${usedPrefix}neon *texto*_
┣ ඬ⃟📝️ _${usedPrefix}tahta *texto*_
┣ ඬ⃟📝️ _${usedPrefix}nulis *texto*_
┣ ඬ⃟📝️ _${usedPrefix}horror *texto*_
┣ ඬ⃟📝️ _${usedPrefix}nulis2 *texto*_
┣ ඬ⃟📝️ _${usedPrefix}lolice *@tag*_
┣ ඬ⃟📝️ _${usedPrefix}simpcard *@tag*_
┣ ඬ⃟📝️ _${usedPrefix}logosky *texto*_ 
┣ ඬ⃟📝️ _${usedPrefix}logocolor *texto*_
┣ ඬ⃟📝️ _${usedPrefix}logogura *texto*_ 
┣ ඬ⃟📝️ _${usedPrefix}logololi *texto*_
┣ ඬ⃟📝️ _${usedPrefix}neonheart *texto*_
┣ ඬ⃟📝️ _${usedPrefix}logocorazon *texto*_
┣ ඬ⃟📝️ _${usedPrefix}logosad *texto1|texto2*_
┣ ඬ⃟📝️ _${usedPrefix}logowolf *texto1|texto2*_
┣ ඬ⃟📝️ _${usedPrefix}logovintage *texto1|texto2*_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<PROPIETARO DEL BOT/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟👑 _${usedPrefix}boost_
┣ ඬ⃟👑 _${usedPrefix}restart_
┣ ඬ⃟👑 _${usedPrefix}banlist_
┣ ඬ⃟👑 _${usedPrefix}binario1_
┣ ඬ⃟👑 _${usedPrefix}binario2_
┣ ඬ⃟👑 _${usedPrefix}banchat2_
┣ ඬ⃟👑 _${usedPrefix}actualizar_
┣ ඬ⃟👑 _${usedPrefix}CajaFuerte_
┣ ඬ⃟👑 _${usedPrefix}unbanchat2_
┣ ඬ⃟👑 _${usedPrefix}bc *texto*_
┣ ඬ⃟👑 _${usedPrefix}bcgc *texto*_
┣ ඬ⃟👑 _${usedPrefix}bcbot *texto*_
┣ ඬ⃟👑 _${usedPrefix}setbye *@tag*_
┣ ඬ⃟👑 _${usedPrefix}banuser *@tag*_
┣ ඬ⃟👑 _${usedPrefix}enable *public*_
┣ ඬ⃟👑 _${usedPrefix}disable *public*_
┣ ඬ⃟👑 _${usedPrefix}unbanuser *@tag*_
┣ ඬ⃟👑 _${usedPrefix}listgroup *@tag*_
┣ ඬ⃟👑 _${usedPrefix}enable *restrict*_
┣ ඬ⃟👑 _${usedPrefix}enable *autoread*_
┣ ඬ⃟👑 _${usedPrefix}setwelcome *@tag*_
┣ ඬ⃟👑 _${usedPrefix}enable *autoread*_
┣ ඬ⃟👑 _${usedPrefix}disable *autoread*_
┗━━━━━━━━━━━━━┛`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '©The Shadow Brokers - Bot', '𝙼𝙴𝙽𝚄 𝚂𝙸𝙼𝙿𝙻𝙴', `#menusimple`, '𝙼𝙴𝙽𝚄 𝙰𝚄𝙳𝙸𝙾𝚂', `#menuaudios`, '𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂', `#grupos`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos)$/i
handler.fail = null
module.exports = handler
