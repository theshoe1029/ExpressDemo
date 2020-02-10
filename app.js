const express = require('express')
const bodyParser = require('body-parser')
const { Client } = require('pg')
const app = express()
const port = 3000
const client = new Client({
  user: '',
  host: '',
  database: '',
  password: '',
  port:
})
client.connect()
const queryText = {
  1: 'INSERT INTO module1(userId, timestamp, score) VALUES($1, $2, $3) RETURNING *',
  2: 'INSERT INTO module2(userId, startTimestamp, endTimestamp) VALUES($1, $2, $3) RETURNING *'
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/write', (req, res) => {
  const data = req.body.data
  data.forEach(row => {
    const text = queryText[row.module]
    var values = []
    for (var key in row)
      if (key !== "module")
        values.push(row[key])

    client.query(text, values, (err, dbres) => {
      if (err != null)
        res.send(err)
    })
  })
  res.send("Success")
})

app.get('/db', (req, res) => {
  client.query('SELECT * FROM module1', (err, m1) => {
    client.query('SELECT * FROM module2', (err, m2) => {
      res.send("Module 1\n" + JSON.stringify(m1.rows) + "\n" + "Module 2\n" + JSON.stringify(m2.rows))
    })
  })
});

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
)
