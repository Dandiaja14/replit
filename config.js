const fs = require('fs')
const chalk = require('chalk')

//—————「 Website Apikey 」—————//
global.APIs = {
    zahwa: 'https://api.zahwazein.xyz'
}

//—————「 Website Apikey 」—————//
global.APIKeys = {
    'https://api.zahwazein.xyz': 'zenzkey_ad0a9acee99f'
}
global.lolhuman = 'APOLOZEA'
//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'Dandy Bot'
global.namaowner = 'Dandy Angga'

//—————「 Setting Owner 」—————//
global.owner = ['6285814690116']
global.ownernomer = "6285814690116"
global.premium = ['6285814690116']
global.ultah = 'Desember 17, 2023'

//—————「 Setting Donasi 」—————//
global.dana = '083815142487'

//—————「 Set Kebutuhan Button 」—————//
global.email = 'saputra6016@gmail.com'
global.namaweb = 'Facebook'
global.myweb = 'https://www.facebook.com/dandiangga.dandiangga'
global.region = 'Indonesia'
global.github = 'https://github.com/4ksanzz'
global.mygc = 'https://chat.whatsapp.com/F4X72ozG9jz48LzVF0y0dt'
global.myig = 'https://instagram.com/dandyangga6016'

//—————「 Set Wm 」—————//
global.packname = 'Instagram @dandyangga6016'
global.author = '© Dandy Angga'

//—————「 Set Nama Session 」—————//
//gausah di apa² ini!
global.sessionName = 'session'

//—————「 Set Prefix 」—————//
//gausah di apa² ini!
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['', '!', '.', '#', '$', ',']

//—————「 Set Simbol 」—————//
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    success: '🤗Done Ya kak~',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !',
    error: '🚫 Fitur Sedang Error !',
}

//—————「 Set Limit 」—————//
//terserah mau ubah atau nggak
global.limitawal = {
    premium: "Infinity",
    free: 30,
}

//—————「 Set Image 」—————//
//global.thumb = 'https://telegra.ph/file/1537b118bad59ab8fa15e.png'
global.thumb = fs.readFileSync('./media/image/4ksanzz.jpg')
global.kurome = { url: 'https://a.uguu.se/faLPPBPP.mp4' }
global.botname = 'Dandy Bot'
global.akulaku = 'Bot By 4K Sanzz'
global.ttname = 'YouTube 4K Sanzz'

//—————「 Set Random Image Menu 」—————//
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.mehk = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
global.awog = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mohai = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mhehe = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
