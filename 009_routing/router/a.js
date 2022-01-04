const express = require('express')

const router = express.Router();

router.get('/', (req, res, next)=> {
    console.log('index.js 파일에서 /페이지를 처리하고 있습니다')
    res.send('<h1>페이지  /a </h1>')
})

module.exports = router;
//모듈 빼는 용법