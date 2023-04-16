const express = require('express');
const render = require('./renders/index');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');



app.use(render);


app.listen(3000, () => {
    console.log("Service listening port 3000");
})

