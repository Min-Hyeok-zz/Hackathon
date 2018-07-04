// const { Nuxt, Builder } = require('nuxt')
// const bodyParser = require('body-parser')
// const session = require('express-session')
// const express = require('express');
// const fs = require('fs');
// // const ejs = require('ejs');
// const app = express();

// app.use(session({
//     secret: 'super-secret-key',
//     resave: false,
//     saveUninitialized: false,
//     cookie: { maxAge: 60000 }
// }))  

// app.use(express.static('public'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());

// const router = require('./server-router')(app,fs);

// const isProd = process.env.NODE_ENV === 'production'
// const nuxt = new Nuxt({ dev: !isProd })
// // 프로덕션 환경에서 빌드되지 않음.
// if (!isProd) {
//   const builder = new Builder(nuxt)
//   builder.build()
// }

// app.use(nuxt.render)

// const server = app.listen(8000, function(){
//     console.log('8000 뽀올트');
// })