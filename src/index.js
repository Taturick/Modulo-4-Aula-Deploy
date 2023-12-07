require('dotenv').config();
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  return res.json("API ligada!");
});


const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Servidor Startado na porta ${port}`, process.env.TATURICK)
});
