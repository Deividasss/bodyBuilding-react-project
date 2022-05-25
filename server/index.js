import express from 'express'
import mysql from 'mysql2/promise'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  email: "email",
  database: "LoginSystem"
})

app.post("/register", (req, res) => {
  const username = req.body.username
  const email = req.body.email
  const password = req.body.password

  db.query(
    "INSERT INTO users (username, email, password) VALUES(?,?)",
    (username, email, password),
    (err, result) => {
      console.log(err)
    }
  )
})

app.listen(3001, () => {
  console.log("Running server")
})