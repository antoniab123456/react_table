const express = require('express');

const app = express();


const routes = require('./routes/index');

app.use('/', routes);


app.listen(5000, () => {
    console.log('server started on port 5000');
})
