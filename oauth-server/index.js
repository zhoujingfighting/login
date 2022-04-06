const express = require('express');
/*
Client ID : 61a2836d26404de41b00
*/
/**
 * clinet secrets : a9c3036779ad65b96c8f1dcb96aa35bfdcf627e2
 */
const app = express();
app.get('/oauth/redirect', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    console.log(1111);
})
app.post('/oauth/redirect', (req, res) => {
    console.log(2222);
})


app.listen(3050, () => console.log('Port 3050 is running'))