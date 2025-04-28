import 'dotenv/config'
import TelegramBot from 'node-telegram-bot-api';
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

export const startBot = () => {
    bot.on('message', msg => {
        const chatId = msg.chat.id
        const text = msg.text
        // console.log(msg)
        if (text === '/start') {
            bot.sendMessage(chatId, 'Welcome bro')
        }
    })

    bot.on("text", async msg => {
        const chatId = msg.chat.id
        const text = msg.text
        let textARr = text.split(' ')
        for (let item of textARr) {
            if (item.toLowerCase().includes('node')) {
                return bot.sendMessage(chatId, "Hoy so'kinma")
            } else {
                bot.sendMessage(chatId, "Rahmat") 
            }
        }
    })
}