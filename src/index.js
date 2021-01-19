const express = require("express");
const appRoutes = require("./routes")
const { connectDatabase } = require("./models")
const cors = require("cors");

const app = express();
app.use(cors());

connectDatabase();
const port = process.env.PORT || 5000;

app.use(express.json());



app.get("/", (req, res)=>{
    return res.status(200).json({
        message:"Hello from express"
    });
    // res.send('<h1>Hello world</h1>')
})

app.use(appRoutes)
app.listen(port, () => console.log(`expres app running on port : ${port}`))