import 'dotenv/config'
import TelegramBot from 'node-telegram-bot-api';
import { WordModel } from './words.js';
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

export const startBot = () => {
    bot.on('message', msg => {
        const chatId = msg.chat.id
        const text = msg.text
        if (text === '/start') {
            bot.sendMessage(chatId, 'Welcome bro')
        }
    })

    bot.on("text", async msg => {
        const chatId = msg.chat.id
        const text = msg.text
        const id = msg.message_id
        let textARr = text.split(' ')
        if (text !== "/start") {
            for (let item of textARr) {
                if (item.toLowerCase().includes('node')) {
                    await WordModel.create({
                        text: text
                    })
                    bot.deleteMessage(chatId, id)
                    return bot.sendMessage(chatId, `${msg.chat.username} noo'rin habar yozmang`)
                } else {
                    bot.sendMessage(chatId, "Rahmat")
                }
            }
        }

    })
}