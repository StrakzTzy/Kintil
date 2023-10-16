// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab



const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://youtube.com/@maapuluh'
global.ig = '@plagolz'
global.email = 'isiemailsaya@gmail.com'
global.region = 'indonesia'
global.ownername = 'WELCOME KING'
global.owner = ['15017812014'] 
global.keyopenai = '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'
global.botname = 'Bot' 
i
lglobal.packname = 'Relztzy' 
global.author = '1S' 
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'session' 
global.sp = '⭔'
global.wlcm = []
global.wlcmm = []
global.anticall = true
//Limit
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//Batas
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})