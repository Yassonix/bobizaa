let handler = async (m, { conn }) => {

m.reply(`*قناتي على انستغرام:*\n
*https://www.instagram.com/gtx_33_sr?igsh=bG4xZDVmaGp5am03*
*تابعني هناك♥*`)
}
handler.help = ['channel']
handler.tags = ['infobot']
handler.command = /^(channel)$/i

export default handler;
