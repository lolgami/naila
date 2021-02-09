let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [082223138784]
│ • Telkomsel [082223138784]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
