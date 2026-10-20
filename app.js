import express from "express";
import {readPage, construcPage } from '/util/templatingEngine.js'

const app = express();

//expose only what is inside 'public'
app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log("endpoint was accessed by a user")
    res.send("hello")
})

// uses environment variable PORT if set, else 8080
const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
})
