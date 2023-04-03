const { Telegraf } = require('telegraf');
const axios = require('axios');

const bot = new Telegraf('6233199859:AAGJeqsKt466GSgQAm2uPACqzItrYqwYmy4');



bot.start((ctx) => {
    ctx.reply('Please typing here');
});

// bot.on('message',(ctx)=>{
//     ctx.reply(ctx.message.text);
//     ctx.replyWithPhoto(`https://cataas.com/cat/says/${ctx.message.text}`);
// });

// bot.on('message', (ctx) => {
//     const message = ctx.message.text;
//     console.log(message);

//     axios.get(`https://jsonplaceholder.typicode.com/posts/${message}`)
//         .then((res) => {
//             ctx.reply(res.data.title);
//             console.log(res.data.body);
//         });

// });


bot.on('message',(ctx) => {
    const message=ctx.message.text;
    bot.telegram.sendChatAction(ctx.chat.id,'typing').then(()=>{
    axios.post(`http://203.217.169.102:40028/chat/completions`, {       
        "messages": [
            {
                "role": "user",
                "content": message
            }
        ],
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((resp)=>{
        ctx.reply(resp.data.choices[0].message.content); 
        console.log(resp.data.choices[0].message.content);
    });
   });
    
});


// bot.on('message',(ctx) => {
//     const message=ctx.message.text;
//     axios.post(`http://203.217.169.102:40028/chat/completions`, {       
//         "messages": [
//             {
//                 "role": "user",
//                 "content": message
//             }
//         ],
//     }, {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }).then((resp)=>{
//         ctx.reply(resp.data.choices[0].message.content);
//         console.log(resp.data.choices[0].message.content);
//     });
// });




bot.launch();