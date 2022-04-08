const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const axios = require('axios');
app.use(cors({
    origin: true,
    maxAge: 86400,
    credentials: true
    //这三个字段是为了实现跨域
}))
/* 申请github oauth认证的网址在/settings/Developer settings/oath这里*/
const main = path.resolve(__dirname, '..', 'public')
/* 这个位置放你自己的oauth id */
const clientID = '61a2836d26404de41b00';
/* 这个位置放你自己的oauth secret */
const clientSecret = "zhoujing's secret";
app.use(express.static(main));
app.get('/oauth/redirect', async (req, res) => {
    console.log(req.query);
    const requestToken = req.query.code;
    console.log(1111);
    const tokenResponse = await axios({
        method: 'post',
        url: 'https://github.com/login/oauth/access_token?' +
            `client_id=${clientID}&` +
            `client_secret=${clientSecret}&` +
            `code=${requestToken}`,
        headers: {
            accept: 'application/json'
        }
    });
    const accessToken = tokenResponse.data.access_token;
    console.log(`access token: ${accessToken}`);
    /* 这里可以做请求处理，获取用户数据 */
    const result = await axios({
        method: 'get',
        url: `https://api.github.com/user`,
        headers: {
            accept: 'application/json',
            Authorization: `token ${accessToken}`
        }
    });
    console.log(result.data);
    /* 这个数据是属于用户github的所有数据  */

    res.redirect(`http://localhost:3000/home`);
})
app.post('/oauth/redirect', (req, res) => {
    console.log(2222);
})


app.listen(3050, () => console.log('Port 3050 is running'))