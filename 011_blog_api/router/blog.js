const nunjucks = require('nunjucks')
const express =require('express')
let blogs = require('../database/dataBlog')


const router = express.Router();

// */ url 에 최신 게시물 3개 응답
// */blog - 블로그 글 모두 응답
// */blog?section=it - it 관련된 글 모두 응답
router.get('/',(req, res, next)=> {
    console.log(req.query)
    const section = req.query.section
    console.log(section)
    //나중에 DB연결해서 수정해야하는 코드
    const data = section ? 
    blogs.filter(blog=> blog.section === section)
    : 
    blogs;
    res.status(200).json(data)
})

// */blog/1 1번 게시물 보기
// */blog/2 2번 게시물 보기
router.get('/:id',(req, res, next)=> {
    console.log(req.query)
    const id = req.params.id

    //나중에 DB연결해서 수정해야하는 코드
    const data = blogs.find(blog => blog.id === +id)
    res.status(200).json(data)
})

router.post('/',(req, res, next)=> {
    console.log(req.body)
    id = blogs.length+ 1 ,
    title = req.body.title,
    content = req.body.content,
    section = req.body.section,
    viewCount = 0,
    pubDate = new Date().toString(),
    modDate = new Date().toString()
    const blog = {id, title, content, section, viewCount, pubDate, modDate}
    
    //나중에 DB연결해서 수정해야하는 코드
    blogs.push(blog);

    res.status(201).json(blogs);
})



router.put('/:id',(req, res, next)=> {
    const id = req.body.id;
    const data = blogs.find(blog => blog.id === +id)
    console.log(data)
    if (data) {
        data.title = req.body.title;
        data.content = req.body.content;
        data.section = req.body.section;
        data.modDate = new Date().toString;

        res.status(200).json(blogs)
    } else {
        res.status(404)
    }
})


router.delete('/',(req, res, next)=> {
    // user 인증 코드 삽입
    const id = req.params.id;

    // 삭제가 안되어서 let blogs = require('../database/dataBlog') let으로 변경
    //나중에 DB 연결해서 수정해야하는 코드
    blgos = blogs.filter(blog => blog.id != id)

    res.status(200).json(blogs)
})

module.exports = router;