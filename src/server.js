const express = require("express");
const app = express();
const port = 3000;

const matchRouter = require("./routes/matchRouter");
app.use(express.json());

app.use("/", matchRouter);
//app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

