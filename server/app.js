const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
require("./db/conn");

app.use(cors());
app.use(express.json());

const port = 4004;
const router = require("./routes");

app.use("/", router);

app.listen(port, () => {
    console.log(`server start at port no ${port}`)
})