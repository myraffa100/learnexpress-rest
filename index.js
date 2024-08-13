const express = require('express');
const path = require('path')
const app = express()

app.use (express.json())
app.use (express.urlencoded({extended: true}));

app.set ('views', path.join(__dirname, 'views'))
app.set ('view engine', 'ejs')

const comments = [
  {
    username:'Michael',
    text: `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`

  },
  {
    username:'samuel',
    text: `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`

  },
  {
    username:'ronald',
    text: `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`

  },
  {
    username:'kevin',
    text: `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`

  },
  

];
// GET display all comment
app.get('/comments', (req, res) => {
  res.render('/comments/index',{comments});
})



// biodata post
app.post ('/daftar', (req , res) => {
  const {name, usia, jurusan} = req.body
  res.send(`Nama : ${name} Usia: ${usia} Jurusan: ${jurusan}`)
})


app.listen(5000,() => {
  console.log('server running on http://localhost:5000');
} )