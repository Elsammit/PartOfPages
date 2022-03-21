// サーバーサイド側コード(nodejsで作成)

const express = require('express');
const app = express();

app.use(express.static('./html'));
app.use(express.static('./js'));
app.use(express.static('./img'));


app.get('/aaa',(req,res)=>{
    var rand = Math.floor( Math.random() * 3 ) ;
    res.set({ 'Access-Control-Allow-Origin': '*' });
    res.send(String(rand));
});

app.listen(3000,()=> 
    console.log('Listening on port 3000')
);