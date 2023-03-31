const {Telegraf}=require('telegraf');
const axios=require('axios');

const bot=new Telegraf('6233199859:AAGJeqsKt466GSgQAm2uPACqzItrYqwYmy4');

bot.start((ctx)=>{
    ctx.reply('Type anything to see wonderful thing');
});

bot.on('message',(ctx)=>{
    ctx.reply(ctx.message.text);
    ctx.replyWithPhoto(`https://cataas.com/cat/says/${ctx.message.text}`);
});

// bot.command((ctx)=>{
//     const message=ctx.message.text;
//     console.log(message);
//     // axios.get('https://cataas.com/cat')
//     // .then((res)=>{
//     //     ctx.reply(res.data.fortune);
//     //     console.log(res.data.fortune);
//     // });
//     ctx.replyWithPhoto(`https://cataas.com/cat/says/${message}`);
// });


bot.launch();