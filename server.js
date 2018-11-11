// server.js

const express = require('express')
const cors = require('cors')
const Web3 = require('web3')
const ganache = require('ganache-cli')

const app = express()
const PORT = 3000
const web3 = new Web3()

app.use(cors())
// web3.setProvider(new Web3.providers.HttpProvider('http://localhost:7545'))
web3.setProvider(ganache.provider());

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/blockchain', function (req, res) {
  web3.eth.getAccounts(function (err, accounts) {
    if (err == null) res.send(JSON.stringify(accounts))
  })
})

app.listen(PORT, function () {
  console.log('Server is started on port:', PORT)
})