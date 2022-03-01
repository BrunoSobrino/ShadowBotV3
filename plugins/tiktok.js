const { tiktokdl, tiktokdlv2 } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*Formato de uso: ${usedPrefix + command} https://tiktokxxxx*`
const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0]))
const url = video.no_watermark || video.no_watermark_hd || video.with_watermark || video.no_watermark_raw
if (!url) throw '*Fallo al detectar la URL o video no encontrado*'
conn.sendFile(m.chat, url, 'Error.mp4', `
🔗 *Url:* ${url}
🧏 *Usuario:* ${nickname}${description ? `🖹 *Descripción:* ${description}` : ''}
`.trim(), m)}
handler.command = /^(tik(tok)?(dl)?)$/i
module.exports = handler



//let fetch = require('node-fetch')
//let handler = async (m, { conn, args, command, usedPrefix }) => {
//  if (!args[0]) throw `*Formato de uso: ${usedPrefix}${command} https://tiktokxxxx*`
//  let { video, description, music, author } = await tiktok(args[0])
//  let url = video.no_watermark || video.with_watermark || video.no_watermark_raw || music
//  if (!url) throw '*Fallo al detectar la URL*'
//  await conn.sendFile(m.chat, url, 'error.mp4', `
//   *🔰 Aqui tienes el tiktok*
//_©The Shadow Brokers - Bot_
//`.trim(), m)
//}
//handler.help = ['tiktok'].map(v => v + ' <url>')
//handler.tags = ['downloader']
//handler.command = /^(tik(tok)?(dl)?)$/i
//module.exports = handler
//const axios = require('axios')
//async function tiktok(url) {
//  try {
//    let results = {}
//    if (/v[tm]\.tiktok\.com/g.test(url)) {
//      let res = await axios.get(url)
//      url = res.request.res.responseUrl
//    }
//    let key = await axios.get(`https://api.snaptik.site/video-key?video_url=${url}`)
//    key = JSON.parse(JSON.stringify(key.data, null, 2))
//    if (key.status !== 'success') throw key
//    let data = await axios.get(`https://api.snaptik.site/video-details-by-key?key=${key.data.key}`)
//    data = JSON.parse(JSON.stringify(data.data, null, 2))
//    if (data.status !== 'success') throw data
//    results = {
//      author: { ...data.data.author },
//      description: data.data.description,
//      video: {
//        with_watermark: `https://api.snaptik.site/download?key=${data.data.video.with_watermark}&type=video`,
//        no_watermark: `https://api.snaptik.site/download?key=${data.data.video.no_watermark}&type=video`,
//        no_watermark_raw: data.data.video.no_watermark_raw
//      },
//      music: `https://api.snaptik.site/download?key=${data.data.music}&type=music`
//    }
//    return results
//  } catch (e) {
//    throw '*El video esta en privado o el link el incorrecto*'
//}}
