const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

const server = express();

server.use(express.json());
server.use()

server.get("/", (req, res) => {
    console.log(process.env.PORT)
    res.status(200).json({message: "Welcome!"})
})
server.use('/api/schemes', SchemeRouter);

module.exports = server;