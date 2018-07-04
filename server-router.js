const mysql = require('mysql');
const db = mysql.createConnection(require('./config/db.js'))

db.connect((err) => {
    if (err) {
        console.log(err)
    } else{
        console.log('mysql 이스 커넥티트')
    }
})

module.exports = (app,fs) => {

    //게시글 리스트 출력
    app.get('/api/board', (req,res) => {
        const sql = 'select * from board order by date desc'
        db.query(sql, (err,results) => {
            res.json(results)
        })
    })

    //게시글 보기 페이지
    app.get('/api/board/:idx',(req,res) => {
        const idx = req.params.idx
        const sql = `select * from board where idx=${idx}`
        db.query(sql, (err,results) => {
            res.json(results)
        })
    })
    
    app.post('/api/board', (req,res) => {
        const writer = req.body.writer
        const subject = req.body.subject
        const content = req.body.content
        const sql = `insert into board set writer=?, subject=?, content=?, date=now()`;
        db.query(sql, [writer,subject,content], (err,results) => {
            console.log(sql)
            res.json(results)
        })
    })
    
    app.put('/api/board/:idx', (req,res) => {
        const idx = req.params.idx
        const writer = req.body.writer
        const subject = req.body.subject
        const content = req.body.content
        const sql = `update board set writer=?, subject=?, content=? where idx = ?`;
        db.query(sql, [writer,subject,content,idx], (err,results) => {
            console.log(sql)
            res.json(results)
        })
    })

}