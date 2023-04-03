const {Telegraf}=require('telegraf');
const axios=require('axios');
const express=require('express');

const bot=new Telegraf('6233199859:AAGJeqsKt466GSgQAm2uPACqzItrYqwYmy4');
const app=express();


bot.start((ctx)=>{
    ctx.reply('Type anything to see wonderful thing');
});

// bot.on('message',(ctx)=>{
//     ctx.reply(ctx.message.text);
//     ctx.replyWithPhoto(`https://cataas.com/cat/says/${ctx.message.text}`);
// });

bot.on('message',(ctx)=>{
    const message=ctx.message.text;
    console.log(message);
    axios.get(`https://jsonplaceholder.typicode.com/posts/${message}`)
    .then((res)=>{
        ctx.reply(res.data.title);
        console.log(res.data.body);
    });
    
});

// bot.on('message',async(ctx)=>{ 
//     const mydata=await axios.post('https://jsonplaceholder.typicode.com/posts',{
//         title:ctx.message.text,
//         body:'baree',
//         userId:1
//     },{
//         headers:{
//             'Content-Type':'application/json'
//         }
//     }
//     );
//     console.log(mydata.data.body);

//     ctx.reply(`
//     ${mydata.data.id}
//     ${mydata.data.title}
//     ${mydata.data.body}
    
//     `);
// });


bot.launch();
app.listen(6000)