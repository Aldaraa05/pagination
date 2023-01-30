const express = require("express")
const cors = require("cors")
const {userRouter} = require("./routes/userRouter")

const app = express();

const port = process.env.Port || 8001

app.use(cors());
app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
    console.log("Server is running at", port);
})