const express = require('express')
const db = require('./db_connet')
const app = express()
// 會員登入
app.get('/login', async (req, res) => {
  const sql = 'SELECT * FROM `member` WHERE accout = ? AND password = ?'
  const [results] = await db.query(sql, [req.body.accout, req.body.password])
  return res.json({
    id: results[0].id,
    name: results[0].name
  })
})

app.use(express.static('public'))
app.listen(3000, () => {
  console.log('伺服器已啟動...')
})
